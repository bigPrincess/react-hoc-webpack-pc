import * as React from 'react';
import { Link } from 'react-router-dom';
import { hoc } from '../containers/http';
import { IProps } from '../constants/http';

import '../styles/http.scss';

export class HttpDemoComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="http-demo-content">
                <ul>
                    {/* <Link to={`/components/http/api`} ><li> api </li></Link> */}
                    <Link to={`/components/http/get-noheader-noparams`} ><li> get-无header-无参数 </li></Link>
                    <Link to={`/components/http/get-noheader-params`} ><li> get-无header-有参数 </li></Link>
                    <Link to={`/components/http/post_noheader_params`} ><li> post-无header-有参数 </li></Link>
                    <Link to={`/components/http/post_header_params`} ><li> post-有header-有参数 </li></Link>
                </ul>
            </div>
        );
    }
}

export const HttpDemoComponentHoc = hoc(HttpDemoComponent);