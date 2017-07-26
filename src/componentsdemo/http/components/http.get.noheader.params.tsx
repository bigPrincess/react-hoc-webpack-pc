import * as React from 'react';

import { hoc } from '../containers/http.get.noheader.params';
import { IProps } from '../constants/http';

import '../styles/http.scss';

let type = 1;
export class HttpDemoComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="http-demo-content">
                <div className="result-content">
                    {(type == 1) ? (<div>
                        <h3>请求描述：</h3>
                        <ul className="info">
                            <li>
                                <span className="info-title">URL:</span>
                                <span className="info-detail">http://fc-c.dev.rs.com/house/houseDetail/13445</span>
                            </li>
                            <li>
                                <span className="info-title">Method:</span>
                                <span className="info-detail">GET</span>
                            </li>
                            <li>
                                <span className="info-title">参数:</span>
                                <span className="info-detail">13445</span>
                            </li>
                            <li>
                                <span className="info-title">header:</span>
                                <span className="info-detail">无</span>
                            </li>
                             <li>
                                <span className="info-title">备注:</span>
                                <span className="info-detail">参数直接在url后面通过/拼接</span>
                            </li>
                        </ul>
                    </div>) :
                    (<div>
                        <h3>请求描述：</h3>
                        <ul className="info">
                            <li>
                                <span className="info-title">URL:</span>
                                <span className="info-detail">http://fc-c.dev.rs.com/loupan/detail?loupanId=13588</span>
                            </li>
                            <li>
                                <span className="info-title">Method:</span>
                                <span className="info-detail">GET</span>
                            </li>
                            <li>
                                <span className="info-title">参数:</span>
                                <span className="info-detail">loupanId:13588</span>
                            </li>
                            <li>
                                <span className="info-title">header:</span>
                                <span className="info-detail">无</span>
                            </li>
                             <li>
                                <span className="info-title">备注:</span>
                                <span className="info-detail">参数直接在url后面通过?拼接,可拼接多个参数</span>
                            </li>
                        </ul>
                    </div>)
                    }
                    <div className="operation">
                        <h3 className="btn" onClick={() => {type=1;this.props.http_request() }}>通过／拼接</h3>
                        <h3 className="btn" onClick={() => {type=2;this.props.http_request1() }}>通过？拼接</h3>
                    </div>
                    <div className="result">
                        <h3>结果:</h3>
                        <span className="detail">{this.props.http_reault}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export const HttpDemoComponentHoc = hoc(HttpDemoComponent);