import * as React from 'react';

import { hoc } from '../containers/antd';
import { IProps } from '../constants/antd';
import { DatePicker, message } from 'antd';

import '../styles/antd.scss';

export class AntdComponent extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}

export const AntdComponentHoc = hoc(AntdComponent);