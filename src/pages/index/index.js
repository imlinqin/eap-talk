import React, { Component } from 'react';
import { Layout,Radio,Menu, Breadcrumb,Select, Spin, Icon, Col,Row, Popover,Avatar,Button,PageHeader ,Mentions, Form,Input,Checkbox,Upload, Modal,Table} from 'antd';

const { Option } = Select;
const { Search } = Input;
const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '标签',
      dataIndex: 'tag',
    },
    {
      title: '章节数量',
      dataIndex: 'num',
    },
    {
        title: '观看人数',
        dataIndex: 'viewnum',
     },
     {
        title: '创建日期',
        dataIndex: 'createTime',
     },
     {
        title: '创建人',
        dataIndex: 'createPeo',
     },
     {
        title: '状态',
        dataIndex: 'status',
     },
     {
        title: '操作',
        dataIndex: 'click',
     },
  ];
  const data = [
    {
      key: '1',
      name: '入职100课',
      tag: '综合大课程',
      num: '5章22节',
      viewnum:<div><span>80人</span><span>明细</span></div>,
      createTime:'2019-11-18',
      createPeo:'林萍',
      status:'草稿',
      click:'编辑'
    },
    
  ];
  // rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
   
  };
export default class courseIndex extends React.Component {

render(){
 return <div className="courseIndex">
   <PageHeader
      style={{
        borderBottom: '1px solid rgb(235, 237, 240)',
        padding:"0px",
        paddingBottom:"5px",
        marginBottom:"10px"
      }}
      backIcon={null}
      onBack={() => null}
      title="我的培训学校>课程管理中心"
    />
    <div>
        <div className="article-tip">
            新建课程章节前，请先上传章节有关各段视频，如果您尚未上传，请先上传视频。
            <span className="upload-video">上传视频</span>
        </div>
        <div>
        <Button className="addArticle">新建课程章节</Button>
        </div>
        <div className="mt10 mb10">
            <div>
                <span className="tag">标签</span>
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="请选择"
    optionFilterProp="children"
    filterOption={(input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="全部">全部</Option>
    <Option value="学习">学习</Option>
  </Select>
 
  <div className="search">  
  <Search
      placeholder="搜索您要的文件"
      enterButton="搜索"
      onSearch={value => console.log(value)}
    />
  </div> 
  <div className="clearfix all-choose">
      <div className="fl mt10"><span className="mr10">全选</span><span>已选中</span><span>0</span><span>文件</span></div>
      <div className="fr"><Button>删除</Button></div>
  </div>
 <div>
 <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
 </div>
     </div>
    </div>
    </div>
    <div>
  
  </div>
   </div>
}}