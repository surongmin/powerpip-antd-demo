import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './style.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
    const allMenu = [
        {
            index: '1',
            menuValue: '项目管理',
            siderMenu: [
                {
                    index: '1-1',
                    SubMenuValue: "前期管理",
                    MenuItemValue: ['年度投资计划', '投资项目汇总', '投资计划分解', '投资计划反馈', '项目立项申请', '前期工作任务']

                },
                {
                    index: '1-2',
                    SubMenuValue: "项目策划",
                    MenuItemValue: ['总体策划', '组织策划']
                },
                {
                    index: '1-3',
                    SubMenuValue: "进度管理",
                    MenuItemValue: ['基础数据', '计划编制']
                }
            ],
        },
        {
            index: '2',
            menuValue: '系统管理',
            siderMenu: [
                {
                    index: '2-1',
                    SubMenuValue: "系统管理",
                    MenuItemValue: ['运行状态', '全局参数', '报表定义', 'IT初始化', '编码规则', '解除批准状态','文件库配置']

                },
                {
                    index: '2-2',
                    SubMenuValue: "项目体系",
                    MenuItemValue: ['EPS定义', '项目维护']
                },
                {
                    index: '2-3',
                    SubMenuValue: "组织管理",
                    MenuItemValue: ['企业部门', '岗位维护','人员维护','部门人员','岗位人员']
                }
            ],
        },
        {
            index: '3',
            menuValue: '个人中心',
        },
        {
            index: '4',
            menuValue: '后台管理',
        }
    ]
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
        </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home