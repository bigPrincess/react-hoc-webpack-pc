import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/cropperimg';
import { IProps } from '../constants/cropperimg';
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";
import { CropperImgComponent } from "../../../components/cropperimg/index";

import '../styles/cropperimg.scss';

export class CropperImgDemoComponent extends React.Component<IProps, any> {
    render() {
        let ImgZoomInDemoApiData = [{
            props: "",
            des: "",
            type: "",
            default: ""
        }]
        return (
            <div className="cropper-img-demo-content">
                <Link to="/components" className="back">
                    返回demo主页面
                </Link>
                <h4>cropperimg API:</h4>
                {/* <table>
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
                            ImgZoomInDemoApiData.map((item, index) => {
                                return <tr>
                                    <td>{item.props}</td>
                                    <td>{item.des}</td>
                                    <td>{item.type}</td>
                                    <td>{item.default}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> */}
                <CropperImgComponent />

                <ImgZoomInComponent imgUrl="" className="img-zoom-in-btn" />
            </div>
        );
    }
}

export const CropperImgDemoComponentWithHoc = hoc(CropperImgDemoComponent);