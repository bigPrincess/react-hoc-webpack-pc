import * as React from 'react';
import { hoc } from '../containers/validation';
import { IProps } from '../constants/validation';
import {config} from '../../../modules/common/validate';
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";
import { Form, Input, Button } from 'antd';
import "../styles/validation.scss";
const FormItem = Form.Item;

class ValidationForm extends React.Component<IProps, any> {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="validate-content">
                <a href="https://ant.design/components/form-cn/">api参考地址</a>
            <Form onSubmit={this.props.handleSubmit}>
                <FormItem   label="邮箱" hasFeedback >
                    {getFieldDecorator('email', config.email)(<Input />)}
                </FormItem>
                <FormItem   label="手机号码" hasFeedback >
                    {getFieldDecorator('phone', config.phone)(<Input />)}
                </FormItem>
                <FormItem >
                    <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
            </Form>
            重点代码：
            配置验证的相关信息，具体地址如下图，
            <ImgZoomInComponent imgUrl="../../assets/images/validation/code1.jpeg" className="img-zoom-in-btn"/>
            具体配置参考api：https://ant.design/components/form/ 中底部
             <ImgZoomInComponent imgUrl="../../assets/images/validation/code2.jpeg" className="img-zoom-in-btn"/>
             在具体的页面中使用方法如下
             <ImgZoomInComponent imgUrl="../../assets/images/validation/code3.jpeg" className="img-zoom-in-btn"/>
            </div>
        );
    }
}

export const ValidationComponentHoc = hoc(Form.create()(ValidationForm));