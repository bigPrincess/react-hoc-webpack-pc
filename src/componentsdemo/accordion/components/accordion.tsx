import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/accordion';
import { IProps } from '../constants/accordion';

import '../styles/accordion.scss';

export class AccordionApiComponent extends React.Component<IProps, any> {
    render() {
        let accordionApiData = [
            {
                props:"menuArrs",
                des:"菜单数据",
                type:"数组",
                default:"不传则为无"
            },
            {
                props:"eveType",
                des:"事件类型",
                type:"string",
                default:"不传则为无"
            },
            {
                props:"currentBgColor",
                des:"设置行的背景颜色",
                type:"string",
                default:"不传则为透明背景"
            },
            {
                props:"width",
                des:"文本内容器宽度",
                type:"number",
                default:"不传则为默认文本占位的宽度"
            },
            {
                props:"height",
                des:"文本内容器高度度",
                type:"number",
                default:"不传则为默认文本的行高"
            },
            {
                props:"leftIcon",
                des:"设置右边icon",
                type:"string",
                default:"不传则不展示左边icon"
            },
            {
                props:"leftWidth",
                des:"设置左边icon宽度",
                type:"number",
                default:"不传则为20"
            },
            {
                props:"leftHeight",
                des:"设置左边icon高度",
                type:"number",
                default:"不传则为20"
            },
            {
                props:"leftColor",
                des:"设置左边icon",
                type:"string",
                default:"不传则默认为#666"
            },
            {
                props:"rightIcon",
                des:"设置右边icon",
                type:"string",
                default:"不传则默认名为更多的icon"
            },
            {
                props:"rightWidth",
                des:"设置右边icon宽度",
                type:"number",
                default:"不传则为16"
            },
            {
                props:"rightHeight",
                des:"设置右边icon高度",
                type:"number",
                default:"不传则为16"
            },
            {
                props:"rightColor",
                des:"设置右边icon颜色",
                type:"string",
                default:"不传则默认为#666"
            },
            {
                props:"currentColor",
                des:"设置文本的颜色",
                type:"string",
                default:"不传则默认为#666"
            },
            {
                props:"onClick",
                des:"设置点击事件回调函数",
                type:"Function",
                default:"不回调则默认只有折叠效果"
            }
        ]
        return (
            <div className="header-demo-content">
                <Link to="/components" className="back">
                     返回demo主页面
                </Link>
                <div>
                    <h4>Accordion API:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accordionApiData.map((item,index)=>{
                                    return <tr>
                                        <td>{item.props}</td>
                                        <td>{item.des}</td>
                                        <td>{item.type}</td>
                                        <td>{item.default}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>DEMO:</h4>
                    <Link to="/components/accordion/accordiondemo" className="demo-title">
                        点击查看 多级折叠菜单的demo
                    </Link>
                </div>
            </div>
        );
    }
}

export const AccordionApiComponentWithHoc = hoc(AccordionApiComponent);