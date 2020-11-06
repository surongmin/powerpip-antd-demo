import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './style.css'
import TableDemo from '../Table'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
    const [SubIndex, setSubIndex] = useState('')
    const allMenus = [
        {
            index: '1',
            menuValue: '项目管理',
            siderMenus: [
                {
                    index: '1-1',
                    SubMenuValue: "前期管理",
                    MenuItemValues: ['年度投资计划', '投资项目汇总', '投资计划分解', '投资计划反馈', '项目立项申请', '前期工作任务']

                },
                {
                    index: '1-2',
                    SubMenuValue: "项目策划",
                    MenuItemValues: ['总体策划', '组织策划']
                },
                {
                    index: '1-3',
                    SubMenuValue: "进度管理",
                    MenuItemValues: ['基础数据', '计划编制']
                }
            ],
        },
        {
            index: '2',
            menuValue: '系统管理',
            siderMenus: [
                {
                    index: '2-1',
                    SubMenuValue: "系统管理",
                    MenuItemValues: ['运行状态', '全局参数', '报表定义', 'IT初始化', '编码规则', '解除批准状态', '文件库配置']

                },
                {
                    index: '2-2',
                    SubMenuValue: "项目体系",
                    MenuItemValues: ['EPS定义', '项目维护']
                },
                {
                    index: '2-3',
                    SubMenuValue: "组织管理",
                    MenuItemValues: ['企业部门', '岗位维护', '人员维护', '部门人员', '岗位人员']
                }
            ],
        },
        {
            index: '3',
            menuValue: '个人中心',
            siderMenus: [
                {
                    index: '3-1',
                    SubMenuValue: "系统管理1",
                    MenuItemValues: ['运行状态', '全局参数', '报表定义', 'IT初始化', '编码规则', '解除批准状态', '文件库配置']

                },
                {
                    index: '3-2',
                    SubMenuValue: "项目体系1",
                    MenuItemValues: ['EPS定义', '项目维护']
                },
                {
                    index: '3-3',
                    SubMenuValue: "组织管理1",
                    MenuItemValues: ['企业部门', '岗位维护', '人员维护', '部门人员', '岗位人员']
                }
            ],
        },
        {
            index: '4',
            menuValue: '后台管理',
            siderMenus: [
                {
                    index: '4-1',
                    SubMenuValue: "参数设置",
                    MenuItemValues: []

                }
            ],
        }
    ]

    const handleSubIndex = (index) => {
        setSubIndex(index)
    }

    const RenderMenuSider = () => {
        if (SubIndex === '') {
            return (
                allMenus[0].siderMenus.map((siderMenu, i) => {
                    return (
                        <SubMenu
                            key={siderMenu.index}
                            icon={<UserOutlined />}
                            title={siderMenu.SubMenuValue}
                        >
                            { RenderMenuSiderItem(siderMenu)}
                        </SubMenu>
                    )
                })
            )
        }
        for (let i = 0; i < allMenus.length; i++) {
            if (SubIndex !== '' && allMenus[i].index === SubIndex) {
                return (
                    allMenus[i].siderMenus.map((siderMenu, i) => {
                        return (
                            <SubMenu
                                key={siderMenu.index}
                                icon={<UserOutlined />}
                                title={siderMenu.SubMenuValue}
                            >
                                { RenderMenuSiderItem(siderMenu)}
                            </SubMenu>
                        )
                    })
                )
            }
        }
    }

    const RenderMenuSiderItem = (siderMenu) => {
        return (
            siderMenu.MenuItemValues.map((menuItem, i) => {
                return <Menu.Item key={`${siderMenu.index}-${i}`}>{menuItem}</Menu.Item>
            })
        )
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {
                        allMenus.map((menu, i) => {
                            return (
                                <Menu.Item key={menu.index} onClick={() => handleSubIndex(menu.index)} >{menu.menuValue}</Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1-1-0']}
                        defaultOpenKeys={['1-1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {RenderMenuSider()}
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
                        <TableDemo />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Home