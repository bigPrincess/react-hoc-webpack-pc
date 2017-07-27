import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/accordion';
import { IProps } from '../constants/accordion';

import '../styles/accordion.scss';

export class AccordionApiComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="header-demo-content">
                <Link to="/components" className="back">
                     返回demo主页面
                </Link>
                <div>
                    <h4>Accordion API:</h4>
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
                            {/*{
                                headerApiData.map((item,index)=>{
                                    return <tr>
                                        <td>{item.props}</td>
                                        <td>{item.des}</td>
                                        <td>{item.type}</td>
                                        <td>{item.default}</td>
                                    </tr>
                                })
                            }*/}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>DEMO:</h4>
                    <Link to="/components/accordion/accordiondemo" className="demo-title">
                        点击查看 多级折叠菜单的demo
                    </Link>
                </div>
            </div>
        );
    }
}

export const AccordionApiComponentWithHoc = hoc(AccordionApiComponent);