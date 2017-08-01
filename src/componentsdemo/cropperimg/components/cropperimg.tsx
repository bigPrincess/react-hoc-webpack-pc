import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/cropperimg';
import { IProps } from '../constants/cropperimg';
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";
import { CropperImgComponent } from "../../../components/cropperimg/index";

import '../styles/cropperimg.scss';

export class CropperImgDemoComponent extends React.Component<IProps, any> {
    render() {
        let cropperDemoApiData = [{
            props: "action",
            des: "图片上传地址",
            type: "string",
            default: "必传字段"
        },{
            props: "multiple",
            des: "是否可以批量上传",
            type: "boolean",
            default: "false"
        },{
            props: "picLength",
            des: "可以上传多少张图片",
            type: "number",
            default: "3"
        },{
            props: "picSize",
            des: "图片大小",
            type: "number",
            default: "2"
        },{
            props: "cropper",
            des: "是否可以剪切图片",
            type: "boolean",
            default: "false"
        },{
            props: "aspectRatio",
            des: "剪切图片长宽比",
            type: "number",
            default: "不传则可以自己调整拖动"
        }]
        return (
            <div className="cropper-img-demo-content">
                <Link to="/components" className="back">
                    返回demo主页面
                </Link>
                <h4>cropperimg API:</h4>
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
                            cropperDemoApiData.map((item, index) => {
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
                <p>demo：</p>

                <CropperImgComponent
                    action="//jsonplaceholder.typicode.com/posts/"
                    multiple={false}
                    picLength={7}
                    picSize={2}
                    cropper={true}
                    aspectRatio={16/9}
                />

                <p>相关代码：</p>
                <ImgZoomInComponent imgUrl="../../assets/images/cropperimg/cropper.png" className="img-zoom-in-btn" />                
            </div>
        );
    }
}

export const CropperImgDemoComponentWithHoc = hoc(CropperImgDemoComponent);