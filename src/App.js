import React from 'react';
import './App.less';
import { Layout, Menu, Icon, Row, Col, Popover, Avatar } from 'antd';
import { observer } from 'mobx-react'
import stores from './stores'
import { withRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import routers from './router'

import Logo from './static/img/brand_logo.svg'
import SLogo from './static/img/brand_logo_small.svg'
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


        return (
            <Router history={history}>
                <Layout className="App">
                    <Header className="App__header">
                        <Row justify={'space-between'}>
                            <Col span={0} xs={4}>
                                <img alt="EAPtalk Logo Small" className="brand-small-logo"
                                    src={SLogo} />
                            </Col>
                            <Col span={4} xs={0}>
                                <img alt="EAPtalk Logo"  className="brand-logo" id="ribbon-logo"
                                     src={Logo} />
                            </Col>
                            <Col span={4}></Col>
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
