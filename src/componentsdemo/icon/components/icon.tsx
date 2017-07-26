import * as React from 'react';
import { hoc } from '../containers/icon';
import { IProps } from '../constants/icon';
import { IconComments } from "../../../components/icons";
import { Link } from "react-router-dom";
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

import '../styles/icon.scss';

export class IconDemoComponent extends React.Component<IProps, any> {
    render() {
        let IconDemoApiData = [{
            props:"type",
            des:"icon类型",
            type:"string",
            default:"不传则为无"
        },{
            props:"width",
            des:"icon宽",
            type:"number",
            default:"37.5"
        },{
            props:"height",
            des:"icon高",
            type:"number",
            default:"37.5"
        },{
            props:"color",
            des:"icon颜色",
            type:"string",
            default:"#666"
        }]
        return (
            <div className="icon-demo-content">
                <Link to="/components" className="back">
                     返回demo主页面
                </Link>
                <h4>icon图标 API:</h4>
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
                                IconDemoApiData.map((item,index)=>{
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
                <IconComments type="picture" width={40} height={40} color="#444"/>
                 
                <p>具体代码：</p>
                <ImgZoomInComponent imgUrl="../../assets/images/icon.png"/>
            </div>
        );
    }
}

export const IconDemoComponentWithHoc = hoc(IconDemoComponent);