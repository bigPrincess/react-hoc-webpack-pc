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
                "name": "公共组件API",
                "submenu": [
                    {
                        "name": "Header插件",
                        "url": "header"
                    },
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
                        "name": "图片上传、剪切、下载",
                        "url": "cropperimg"
                    },
                    {
                        "name":"自适应",
                        "url":"ApdaComponent"
                    },{
                        "name":"表单验证",
                        "url":"Validation"
                    }
                ]
            }
        ]
        return (
            <div className="demo-list">
                <AccordionComponent width={'30'} height={'30'} menuArrs={accordarr} eveType = {'click'} currentColor={'rgba(102,102,102,1)'} title="这个是插件DEMO页哦"/>
           </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);