import React from 'react';
import './App.less';
import { Layout, Menu, Icon, Row, Col, Dropdown, Modal, Button, Pagination, Tabs, Slider } from 'antd';
import { observer } from 'mobx-react'
import stores from './stores'
import { withRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import routers from './router'


import Logo from './static/img/brand_logo.svg'
import SLogo from './static/img/brand_logo_small.svg'
import GuestImg from './static/img/guest_avatar.jpg'


import { HeartOutlined, HeartFilled, LoadingOutlined, createFromIconfontCN,AudioFilled,SoundFilled, PlayCircleFilled } from '@ant-design/icons';
// customer icon
const Iconfont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2022999_18mdtx4f9tx.js', // 在 iconfont.cn 上生成
});

const history = createBrowserHistory();
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const { TabPane } = Tabs;


@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStauts: true,//login status
            navtabsSelected: 1,
            navpillsSelected: -1,
            navTabs: [{ title: 'Reading aloud 朗读' }, { title: 'Presentation 演讲' }, { title: '单词纠音' }],
            navPills: [{ title: 'Architecture' }, { title: 'Business' }, { title: 'HS' }],
            scoreLevel: 0 //打分等级 0 1 2 3 4 5  0为未打分

        }
    }

    async componentDidMount() {

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            // visible: false,
            visible2: true,
        });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,

        });
    }
    handleCancel2 = e => {
        console.log(e);
        this.setState({
            //visible: false,
            visible2: false,
        });
    }
    onNavTabs = (val) => {
        this.setState({
            navtabsSelected: val
        });
    }
    onNavPills = (val) => {
        this.setState({
            navpillsSelected: val
        });
    }




    render() {
        const { loginStauts, navtabsSelected, navTabs, navPills, navpillsSelected, scoreLevel } = this.state
        // 已登录菜单
        const menu = (loginStauts ?
            <Menu>
                <Menu.Item key="0">
                    <a >Profile</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a >History</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a >Collection</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">Login</Menu.Item>
            </Menu> :
            <Menu>
                <Menu.Item key="0">
                    <a >Login</a>
                </Menu.Item>

            </Menu>
        );

        return (
            <Router history={history}>
                <Layout className="App">
                    <Header className="App__header">
                        <Row justify={'space-between'} align={'middle'}>
                            {/* h5 logo */}
                            <Col sm={0} xs={4}>
                                <img alt="EAPtalk Logo Small" className="brand-small-logo"
                                    src={SLogo} />
                            </Col>
                            {/* pc logo*/}
                            <Col sm={4} xs={0}>
                                <img alt="EAPtalk Logo" className="brand-logo" id="ribbon-logo"
                                    src={Logo} />
                            </Col>
                            {/* right-silde login */}
                            <Col span={20} className="header-login-wrap">

                                <img className="login-guest-avatar"
                                    src={GuestImg} />

                                <Dropdown overlay={menu} className="header-dropdown" trigger={['click']}>
                                    <a className="ant-dropdown-link dropdown-toggle" onClick={e => e.preventDefault()}>
                                        {loginStauts ? 'U_1597895259882' : 'Guest'}
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>


                    </Header>
                    <Layout >
                        <Row className="banner">
                            <Col sm={24} xs={0}  >
                                <img className="img"
                                    src={Logo} />
                            </Col>
                        </Row>
                    </Layout>
                    <Layout className='main-content'>
                        {/* Tabs */}
                        <Tabs className="eap-nav-tabs" defaultActiveKey="1" type="card" size={'large'} onChange={(v) => {
                            console.log('Tabs', v)
                        }}>
                            {navTabs && navTabs.map((v, i) => {
                                return <TabPane tab={v.title} key={i}></TabPane>
                            })}

                        </Tabs>
                        {/* nav-tabs */}
                        {/* <ul className="nav nav-tabs" >
                            {navTabs && navTabs.map((v, i) => {
                                return <li className="nav-item" key={i}>
                                    <a className={`nav-link ${navtabsSelected == i ? 'active' : ''}`} onClick={() => this.onNavTabs(i)}>{v.title}</a>
                                </li>
                            })}

                        </ul> */}
                        {/* sub nav */}
                        <ul className="nav nav-pills " >
                            {/* val is -1 then nav-pills is all */}
                            <li className="nav-item">
                                <a className={`nav-link ${navpillsSelected == -1 ? 'active' : ''}`} onClick={() => this.onNavPills(-1)}>All</a>
                            </li>
                            {navPills && navPills.map((v, i) => {
                                return <li className="nav-item" key={i}>
                                    <a className={`nav-link ${navpillsSelected == i ? 'active' : ''}`} onClick={() => this.onNavPills(i)}>{v.title}</a>
                                </li>
                            })}


                        </ul>
                        <div className='tab-content'>
                            <Row id='practice-content-container' gutter={[{ xs: 8, sm: 30 }, { xs: 8, sm: 20 }]}>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => {
                                    return <Col sm={8} xs={24} className="col-md-6 col-xl-4 pb-3"  >

                                        <div class="card h-100 border-0 shadow-sm" >
                                            <div class="card-body">
                                                <div class="card-title">
                                                    <h4>[ 3 ] Sentence Reading Aloud Practice</h4>
                                                    <span class="badge badge-pill badge-info mr-2">General</span>
                                                </div>
                                                <div class="card-text">
                                                    <p>Since those people have faced the same inconveniences and survived culture shock, they will understand the difficulties and offer some practical suggestions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                })}

                            </Row>
                        </div>

                        {/* Pagination */}
                        <div className='pagination-box'>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>

                        <p></p>
                        <p></p>
                        <p></p>
                        <Button type="primary" onClick={this.showModal}>
                            Open Modal
                         </Button>
                        <Button type="primary" onClick={this.showModal2}>
                            Open Modal
                         </Button>
                        {/* 打分 modal */}
                        <Modal
                            title="[ 3 ] Sentence Reading Aloud Practice"
                            visible={this.state.visible}
                            footer={null}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <div className='product-modal'>
                                {/* 评分 --打分后显示 */}
                                <div class="rating" >
                                    <div class="item1" ><i class="fas1 fa-square"></i> Perfect</div>
                                    <div class="item2" ><i class="fas2 fa-square"></i> Fine</div>
                                    <div class="item3" ><i class="fas3 fa-square"></i> Safe</div>
                                    <div class="item4" ><i class="fas4 fa-square"></i> Bad</div>
                                    <div class="item5" ><i class="fas5 fa-square"></i> Worst</div>
                                </div>
                                {/* 内容 */}
                                <div className={`content-words level${scoreLevel}`}>
                                    <p>The most advanced pollution control device was invented and patented by an American company. The emissions could be monitored and reduced by citizens and governments. It is suggested that pollution-reducing techniques take time and effort, and most individuals, businesses, and governments fail to make such practices a priority.</p>
                                </div>
                                {/* 操作 */}
                                <div className='handle-btn'>
                                    {/* loading */}
                                    {/* <Button className='btn' type="primary" icon={<LoadingOutlined />}>Example</Button> */}
                                    {/* start 播放 <Iconfont type='icon-bofang' />  */}
                                    <Button className='btn' type="primary" icon={<Iconfont type='icon-bofang' />}>Example</Button>
                                    {/* stop 暂停 <Iconfont type='icon-zanting' */}
                                    {/* <Button className='btn' type="primary" icon={<Iconfont type='icon-zanting' />}>Example</Button> */}
                                    {/*  Bookmark 已收藏 <HeartFilled />     未收藏  <HeartOutlined /> */}
                                    {/* <Button className='btn' type="primary" icon={<HeartFilled />}>Bookmark</Button> */}
                                    <Button className='btn' type="primary" icon={<HeartOutlined />}>Bookmark</Button>
                                </div>
                                {/* range */}
                                <div className='slider-box'>
                                    <div className='play-btn'>

                                        <Iconfont style={{ color: '#fff' }} className='play-icon' type='icon-bofang' />

                                    </div>
                                    {/* 用法 https://ant.design/components/slider-cn/#header */}
                                    <Slider className='slider' defaultValue={30} disabled={false} />
                                </div>
                                {/* timer */}
                                <div className='voice-time'>
                                    <span>00:00</span>/<span>00:02</span>
                                </div>
                                {/* 麦克风 声音大小 */}
                                <Row className='microphone'>
                                      
                                        <Col sm={8} xs={8} className='flex'>
                                           <AudioFilled className='' /><Slider className='slider' defaultValue={30} disabled={false} />
                                        </Col>
                                        <Col sm={8} xs={0} className='flex'>
                                        <Iconfont type='icon-zanting' /><Slider className='slider' defaultValue={30} disabled={false} />
                                        </Col>
                                       
                                   
                                </Row>
                                {/* button */}
                                <div className='recording-box'>
                                    <div className='recording-btn'>
                                        {/* 记录开始 */}
                                        {false && <span className="start-icon"></span>}
                                        {/* 记录中 */}
                                        {false && <span className="recording-icon"></span>}
                                        {/* 刷新 */}
                                        {true && <Iconfont style={{ color: '#fff' }} className='refresh-icon' type='icon-shuaxin' />}
                                    </div>
                                    <div>Tap to start</div>
                                </div>
                                {/* 评分 */}
                                <div class="scores-results">
                                    <div class="stitle" >Total: 0</div>
                                    <Row class="scon">
                                        <Col sm={8} xs={24}>
                                            Fluency: 0
                                        </Col>
                                        <Col sm={8} xs={24}>
                                            Pronunciation: 0
                                        </Col>
                                        <Col sm={8} xs={24}>
                                            Rhythm: 0
                                        </Col>
                                    </Row>

                                </div>
                            </div>



                        </Modal>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible2}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel2}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Layout>
                    <Footer className='footer'>

                        Copyright © 2019 EAPtalk® eaptalk.com All Rights Reserved. 苏ICP备19033748号-1<br />
                            Feedback反馈 | Support支持 | User guide用户指南

                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
