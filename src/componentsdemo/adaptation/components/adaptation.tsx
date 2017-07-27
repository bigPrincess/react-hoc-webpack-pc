import * as React from 'react';

import { hoc } from '../containers/adaptation';
import { IProps } from '../constants/adaptation';
import { Row, Col } from 'antd';

import '../styles/adaptation.scss';

export class ApdaComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="adaptation-content">
                api地址：https://ant.design/components/grid-cn/
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>Col</Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>Col</Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>Col</Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4}>Col</Col>
                </Row>
            </div>
        );
    }
}

export const ApdaComponentHoc = hoc(ApdaComponent);