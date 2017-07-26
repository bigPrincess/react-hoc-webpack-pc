import * as React from 'react';

import { hoc } from '../containers/http.post.noheader.params';
import { IProps } from '../constants/http';

import '../styles/http.scss';

export class HttpDemoComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="http-demo-content">
                <div className="result-content">
                    <div>
                        <h3>请求描述：</h3>
                        <ul className="info">
                            <li>
                                <span className="info-title">URL:</span>
                                <span className="info-detail">http://fc-c.dev.rs.com/wx/config</span>
                            </li>
                            <li>
                                <span className="info-title">Method:</span>
                                <span className="info-detail">POST</span>
                            </li>
                            <li>
                                <span className="info-title">参数:</span>
                                <span className="info-detail">"wxUrl":"http://localhost:8080/components/http/post_noheader_params","wxSource":"MMALL"</span>
                            </li>
                            <li>
                                <span className="info-title">header:</span>
                                <span className="info-detail">无</span>
                            </li>
                        </ul>
                    </div>
                    <div className="operation">
                        <h3 className="btn" onClick={() => { this.props.http_request() }}>点击请求</h3>
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