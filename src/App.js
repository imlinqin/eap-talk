import React from 'react';
import './App.less';
import { Layout, Menu, Icon, Row, Col, Dropdown, Avatar } from 'antd';
import { observer } from 'mobx-react'
import stores from './stores'
import { withRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import routers from './router'

import Logo from './static/img/brand_logo.svg'
import SLogo from './static/img/brand_logo_small.svg'
import GuestImg from './static/img/guest_avatar.jpg'
const history = createBrowserHistory();
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;




@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'sub3-3'
        }
    }

    async componentDidMount() {

    }


    render() {

        // 已登录菜单
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
          );

        return (
            <Router history={history}>
                <Layout className="App">
                    <Header className="App__header">
                        <Row justify={'space-between'} align={'middle'}>
                            <Col sm={0} xs={4}>
                                <img alt="EAPtalk Logo Small" className="brand-small-logo"
                                    src={SLogo} />
                            </Col>
                            <Col sm={4} xs={0}>
                                <img alt="EAPtalk Logo" className="brand-logo" id="ribbon-logo"
                                    src={Logo} />
                            </Col>
                            <Col span={12} className="header-login-wrap">
                               
                                    <img className="login-guest-avatar"
                                        src={GuestImg} />
                                
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link dropdown-toggle" onClick={e => e.preventDefault()}>
                                        Guest
                                     </a>
                                </Dropdown>
                            </Col>
                        </Row>


                    </Header>
                    <Layout>
                        <div>内容</div>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
