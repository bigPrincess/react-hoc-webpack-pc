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
                "url": "/components/http"
            },
            {
                "name": "图片点击放大",
                "url": "/components/imgzoomin"
            },
            {
                "name": "多级折叠菜单",
                "url": "/components/accordion"
            },
            {
                "name": "icon图标",
                "url": "/components/icon"
            },
            {
                "name": "消息提示框,loading等",
                "url": "/components/message"
            },
            {
                "name": "自适应",
                "url": "/components/ApdaComponent"
            },
            {
                "name": "图片上传、剪切",
                "url": "/components/cropperimg"
            },
            {
                "name": "表单验证",
               "url": "/components/Validation"
            },
            {
                "name":"表格",
                "url":"/components/table"
            },
            {
                "name": "日期控件",
                "url": "/components/datepicker"
            }
        ]
        return (
            <div className="demo-list">
                <div className="demo-list-inner">
                    <AccordionComponent menuArrs={accordarr} onClick={(e) => {
                        {/*console.log(e.currentTarget.getElementsByClassName('pageUrl'));*/}
                        let pageUrl = e.currentTarget.getElementsByClassName('pageUrl')[0].value;
                        window.location.href = pageUrl;
                    }}/>
                </div>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);