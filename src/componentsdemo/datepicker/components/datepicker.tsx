import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/datepicker';
import { IProps } from '../constants/datepicker';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import 'antd/dist/antd.css';
import '../styles/datepicker.scss';


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
                
                <h4>DatePicker日期选择框 API 以及demo</h4>
                API：<a href="https://ant.design/components/date-picker-cn/">https://ant.design/components/date-picker-cn/</a>
                <p>DEMO:</p>
                <div>
                    <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />                
                </div>
                <h4>TimePicker时间选择框 API 以及demo</h4>
                API：<a href="https://ant.design/components/time-picker-cn/">https://ant.design/components/time-picker-cn/</a>
                <p>DEMO:</p>
                <div>
                    <TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
                </div>
            </div>
        );
    }
}

export const DatepickerDemoComponentWithHoc = hoc(DatepickerDemoComponent);