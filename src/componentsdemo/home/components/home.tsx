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
                "url": "validation"
            },
            {
                "name":"表格",
                "url":"table"
            }
        ]
        return (
            <div className="demo-list">
                <div className="demo-list-inner">
                    <AccordionComponent width={'14'} height={'14'} menuArrs={accordarr} eveType={'click'} currentColor={'rgba(102,102,102,1)'} title="这个是插件DEMO页哦" />
                </div>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);