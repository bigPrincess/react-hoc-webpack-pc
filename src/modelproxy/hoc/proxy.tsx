import * as React from 'react';
import { withReducer } from 'recompose';
import { proxy } from "../index";
// import { Toast } from 'antd-mobile';
// import 'antd-mobile/lib/toast/style/index';

export interface IModelProxyAction<T> {
    loaded?: boolean;
    loading?: boolean;
    isError?: boolean;
    data?: T;
}

export interface IModelProxyPayload<T> {
    type: string;
    payload?: IModelProxyAction<T>;
}

export enum ModelProxyActions {
    MODELPROXY_LOAD,
    MODELPROXY_LOAD_FAIL,
    MODELPROXY_LOAD_SUCCESS
}

export const modelProxyReducer = (initialState: IModelProxyAction<any>, action: IModelProxyPayload<any>): IModelProxyAction<any> => {
    switch (action.type) {
        case ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD]:
            return Object.assign({}, initialState, { loading: true });
        case ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD_FAIL]:
            return Object.assign({}, initialState, { loading: false, isError: true, data: action.payload });
        case ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD_SUCCESS]:
            return Object.assign({}, initialState, { loading: false, loaded: true, data: action.payload });
    }

    return initialState;
}

const ModelProxyHoc = (stateName, dispatchName, initialState, Component: any) => {
    @(withReducer as any)(stateName, dispatchName + stateName, modelProxyReducer, initialState)
    class Hoc extends React.Component<{ dispatch: Function }, any> {
        constructor(props, content) {
            super(props, content);
        }

        execute(path: string, key: string, config: any = {}, loading: any = { content: "加载中", duration: 0 }): Promise<any> {
            const dispatch = this.props[dispatchName + path];
            let timeid;

            if (!dispatch) {
                console.error("没有发现dispatch方法！");
                return null;
            }

            loading && (timeid = setTimeout(() => {
                // loading 展示
                // Toast.loading(loading.content, loading.duration, () => { }, true);
            }, 300));

            // 更改状态
            dispatch({
                type: ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD],
            });
            // 调用接口
            let promise = proxy.execute(key, config || {});

            // 执行成功或者失败的处理
            promise.then((data) => {
                clearTimeout(timeid);
                // Toast.hide();
                dispatch({
                    type: ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD_SUCCESS],
                    payload: data
                });

                return data;
            }).catch((err: Error) => {
                clearTimeout(timeid);
                // Toast.hide();
                dispatch({
                    type: ModelProxyActions[ModelProxyActions.MODELPROXY_LOAD_FAIL],
                    payload: err
                });
            });

            return promise;
        }

        render() {
            const props = Object.assign({}, this.props, {
                execute: this.execute.bind(this)
            });

            return <Component {...props}></Component>;
        }
    }

    return Hoc;
}

/**
 * 调用接口的HOC
 * @param stateName    当前需要添加到的属性
 * @param dispatchName 设置接口返回值的方法
 * @param initialState 初始值
 */
export function getProxyHoc<T>(stateName: string, dispatchName: string = "dispatch", initialState: IModelProxyAction<T> = { loading: false, loaded: false }) {
    return ModelProxyHoc.bind(null, stateName, dispatchName, initialState);
}

/**
 * HOC加入到props中的方法属性
 */
export interface IProxyHocProps {
    execute?: (path: string, key: string, config?: any, loading?: { content: string, duration: number }) => Promise<any>;
}

/**
 * 接口的返回格式
 */
export interface IInterfaceData<T> {
    code: number;
    message: string;
    dataMap: T;
}