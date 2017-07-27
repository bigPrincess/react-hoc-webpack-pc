import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="demo-list">
                <div><Link to="/components/http">http请求 ⇨</Link></div>
                <div><Link to="/components/antd">antd ⇨</Link></div>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>
                <div><Link to="/components/icon">icon图标 ⇨</Link></div>
                <div><Link to="/components/cropperimg">图片上传、剪切、下载 ⇨</Link></div>         
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);