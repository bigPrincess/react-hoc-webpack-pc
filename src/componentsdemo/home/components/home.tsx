import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        let accordarr = [
            {
                "name": "http请求",
                "url": "http"
            },
            {
                "name": "图片点击放大",
                "url": "imgzoomin"
            },
            {
                "name": "多级折叠菜单",
                "url": "accordion"
            },
            {
                "name": "icon图标",
                "url": "icon"
            },
            {
                "name": "消息提示框,loading等",
                "url": "message"
            },
            {
                "name": "自适应",
                "url": "ApdaComponent"
            },
            {
                "name": "图片上传、剪切",
                "url": "cropperimg"
            },
            {
                "name": "表单验证",
                "url": "Validation"
            }
        ]
        return (
            <div className="demo-list">
                <div className="demo-list-inner">
                    <div><Link to="/components/http">http请求 ⇨</Link></div>
                    <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>
                    <div><Link to="/components/accordion">多级折叠菜单 ⇨</Link></div>
                    <div><Link to="/components/icon">icon图标 ⇨</Link></div>
                    <div><Link to="/components/message">消息提示框,loading等</Link></div>
                    <div><Link to="/components/ApdaComponent">自适应 ⇨</Link></div>
                    <div><Link to="/components/cropperimg">图片上传、剪切 ⇨</Link></div>
                    <div><Link to="/components/Validation">表单验证 ⇨</Link></div>
                    {/*<AccordionComponent menuArrs={accordarr} currentColor={'rgba(102,102,102,1)'}/>*/}
                </div>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);