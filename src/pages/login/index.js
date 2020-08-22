import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import stores from '../../stores'

class NormalLoginForm extends React.Component {
    async componentDidMount() {
        let token = this.props.location.query.access_token
        let kctype = this.props.location.query.kctype
        //console.log("query",this.props.location.query);
        if (token != null) {
            await stores.session.login(token)
        }
        let user = stores.session.user.get()
        if (user != null) {
            if (!kctype) {
                this.props.history.replace({
                    pathname: '/'
                })
            }
            else {
                this.props.history.replace({
                    pathname: '/music'
                })
            }
        }
        else {
            stores.session.logOff()
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        return null
      //  const { getFieldDecorator } = this.props.form;
        //return (
        //    <Form onSubmit={this.handleSubmit} className="login-form">
        //        <Form.Item>
        //            {getFieldDecorator('username', {
        //                rules: [{ required: true, message: 'Please input your username!' }],
        //            })(
        //                <Input
        //                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        //                    placeholder="Username"
        //                />,
        //            )}
        //        </Form.Item>
        //        <Form.Item>
        //            {getFieldDecorator('password', {
        //                rules: [{ required: true, message: 'Please input your Password!' }],
        //            })(
        //                <Input
        //                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        //                    type="password"
        //                    placeholder="Password"
        //                />,
        //            )}
        //        </Form.Item>
        //        <Form.Item>
        //            {getFieldDecorator('remember', {
        //                valuePropName: 'checked',
        //                initialValue: true,
        //            })(<Checkbox>Remember me</Checkbox>)}
        //            <a className="login-form-forgot" href="">
        //                Forgot password
        //  </a>
        //            <Button type="primary" htmlType="submit" onClick={() => {
        //                console.log('history', this.props.history)
        //                this.props.history.push('./home')
        //            }} className="login-form-button">
        //                Log in
        //  </Button>
        //            Or <a href="">register now!</a>
        //        </Form.Item>
        //    </Form>
        //);
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(NormalLoginForm);
export default WrappedNormalLoginForm
