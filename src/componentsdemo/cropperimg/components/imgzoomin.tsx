import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/imgzoomin';
import { IProps } from '../constants/imgzoomin';

import '../styles/imgzoomin.scss';
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

export class ImgZoomInDemoComponent extends React.Component<IProps, any> {
    render() {
        let ImgZoomInDemoApiData = [{
            props:"imgUrl",
            des:"图片地址",
            type:"string",
            default:"不传则为无"
        },{
            props:"className",
            des:"图片类名",
            type:"string",
            default:"不传则为无"
        }]
        return (
            <div className="img-zoom-in-demo-content">
                <Link to="/components" className="back">
                     返回demo主页面
                </Link>
                <h4>图片放大 API:</h4>
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
                                ImgZoomInDemoApiData.map((item,index)=>{
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
                    <ImgZoomInComponent imgUrl="../../assets/images/img_zoom_in.png" className="img-zoom-in-btn"/>
            </div>
        );
    }
}

export const ImgZoomInDemoComponentWithHoc = hoc(ImgZoomInDemoComponent);