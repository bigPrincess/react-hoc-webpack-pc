import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/datepicker';
import { IProps } from '../constants/datepicker';
import { message, Button } from 'antd';
import { Spin, Switch, Alert } from 'antd';

import '../styles/message.scss';


export class DatepickerDemoComponent extends React.Component<IProps, any> {
    state = { loading: false }
    toggle = (value) => {
        this.setState({ loading: value });
    }
    render() {
        let ApiData = [{
            props: "",
            des: "",
            type: "",
            default: ""
        }]
        return (
            <div className="message-demo-content">
                <Link to="/components" className="back">
                    返回demo主页面
                </Link>
                <h4>Spin API 以及demo</h4>
                API：<a href="https://ant.design/components/spin-cn/">https://ant.design/components/spin-cn/</a>
                <p>DEMO:</p>
                <div>
                    <Spin spinning={this.state.loading}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                </div>
                <h4>Message API 以及demo</h4>
                <a href="https://ant.design/components/message-cn/">https://ant.design/components/message-cn/</a><br/>
                <div id="tableuu"></div>
                <Button onClick={() => {
                    message.config({
                        top: 100,
                        duration: 200,
                        getContainer: () => document.getElementById("tableuu"),
                    });
                    message.loading(<div style={{ color: "red" }}>8888</div>, 0);
                }}>loading</Button><br/>
                <Button onClick={() => { message.destroy() }}>销毁</Button>
            </div>
        );
    }
}

export const DatepickerDemoComponentWithHoc = hoc(DatepickerDemoComponent);