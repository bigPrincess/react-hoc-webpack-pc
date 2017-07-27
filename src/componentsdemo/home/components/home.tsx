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
                    }
                ]
            }
        ]
        return (
            <div className="demo-list">
                {/* <div><Link to="/components/http">http请求 ⇨</Link></div>
                <div><Link to="/components/antd">antd ⇨</Link></div>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>
                <div><Link to="/components/icon">icon图标 ⇨</Link></div>
                <div><Link to="/components/cropperimg">图片上传、剪切、下载 ⇨</Link></div>                   */}
                <AccordionComponent width={'30'} height={'30'} menuArrs={accordarr} eveType = {'click'} currentColor={'rgba(102,102,102,1)'} title="这个是插件DEMO页哦"/>
           </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);