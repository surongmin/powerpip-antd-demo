import React from 'react'
import { Table, Switch, Radio, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ModalContent from '../ModalContent'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Action',
        key: 'action',
        sorter: true,
        render: () => (
            <Space size="middle">
                <a>Delete</a>
                <a className="ant-dropdown-link">
                    More actions <DownOutlined />
                </a>
            </Space>
        ),
    },
];

const columnsTable = [
    {
        title: '',
        render: (text, record, index) => `${index + 1}`,
    },
    {
        title: '编号',
        dataIndex: 'Code',
    },
    {
        title: '名字',
        dataIndex: 'Name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '主部门',
        dataIndex: 'DeptName',
    },
    {
        title: '主岗位',
        dataIndex: 'PosiName',
    },
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    //     filters: [
    //         {
    //             text: 'London',
    //             value: 'London',
    //         },
    //         {
    //             text: 'New York',
    //             value: 'New York',
    //         },
    //     ],
    //     onFilter: (value, record) => record.address.indexOf(value) === 0,
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     sorter: true,
    //     render: () => (
    //         <Space size="middle">
    //             <a>Delete</a>
    //             <a className="ant-dropdown-link">
    //                 More actions <DownOutlined />
    //             </a>
    //         </Space>
    //     ),
    // },
];

const dataTable = [
    {
        DeptName: '产品部',
        Code: 'limgming',
        PosiName: "实施工程师",
        Id: "7 c306e21 - 8 aad - 4 dcd - 81 de - d9fa1d3e58b6",
        RoleType: 0,
        Name: '李明'
    }, {
        DeptName: "研发部",
        Code: 'liuzhi',
        PosiName: '总经理',
        Id: '3 c6ef1be - 7e4 a - 402 a - b882 - 7 b405114f6c1 ',
        RoleType: 0,
        Name: '刘志'
    }, {
        DeptName: '任华测试1',
        Code: 'yl01',
        PosiName: '测试',
        Id: 'b6a559ac - 0b 42 - 4 d38 - b7dc - fc3608de1f6f',
        RoleType: 0,
        Name: '杨林'
    }, {
        DeptName: '任华测试1',
        Code: 'rhcs01',
        PosiName: '开发工程师',
        Id: '0 f3af920 - 46 d0 - 433 d - a57b - 936 da1a7b6e3',
        RoleType: 0,
        Name: '测试没有用户'
    }
]

const data = [];
for (let i = 1; i <= 20; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

class TableDemo extends React.Component {
    state = {
        visible: false,
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        expandable,
        title: undefined,
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };

    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    handleTableLayoutChange = e => {
        this.setState({ tableLayout: e.target.value });
    };

    handleExpandChange = enable => {
        this.setState({ expandable: enable ? expandable : undefined });
    };

    handleEllipsisChange = enable => {
        this.setState({ ellipsis: enable });
    };

    handleTitleChange = enable => {
        this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = enable => {
        this.setState({ showHeader: enable ? showHeader : false });
    };

    handleFooterChange = enable => {
        this.setState({ footer: enable ? footer : undefined });
    };

    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };

    handleYScrollChange = enable => {
        this.setState({ yScroll: enable });
    };

    handleXScrollChange = e => {
        this.setState({ xScroll: e.target.value });
    };

    handleDataChange = hasData => {
        this.setState({ hasData });
    };

    handleDoubleClickRow = (record, event) => {
        this.setState({
            visible: true,
        });
    }

    render() {
        const { visible, xScroll, yScroll, ...state } = this.state;

        const scroll = {};
        if (yScroll) {
            scroll.y = 240;
        }
        if (xScroll) {
            scroll.x = '100vw';
        }

        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        if (xScroll === 'fixed') {
            tableColumns[0].fixed = true;
            tableColumns[tableColumns.length - 1].fixed = 'right';
        }

        return (
            <>
                <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{ marginBottom: 16 }}
                >
                    <Form.Item label="边框">
                        <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                    </Form.Item>
                    <Form.Item label="加载">
                        <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                    </Form.Item>
                    <Form.Item label="标题">
                        <Switch checked={!!state.title} onChange={this.handleTitleChange} />
                    </Form.Item>
                    <Form.Item label="表头">
                        <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
                    </Form.Item>
                    <Form.Item label="底部">
                        <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
                    </Form.Item>
                    <Form.Item label="扩展">
                        <Switch checked={!!state.expandable} onChange={this.handleExpandChange} />
                    </Form.Item>
                    <Form.Item label="复选框">
                        <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                    </Form.Item>
                    <Form.Item label="固定表头">
                        <Switch checked={!!yScroll} onChange={this.handleYScrollChange} />
                    </Form.Item>
                    <Form.Item label="数据">
                        <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
                    </Form.Item>
                    <Form.Item label="省略">
                        <Switch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />
                    </Form.Item>
                    <Form.Item label="大小">
                        <Radio.Group value={state.size} onChange={this.handleSizeChange}>
                            <Radio.Button value="default">默认</Radio.Button>
                            <Radio.Button value="middle">中等</Radio.Button>
                            <Radio.Button value="small">小</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="表格样式">
                        <Radio.Group value={xScroll} onChange={this.handleXScrollChange}>
                            <Radio.Button value={undefined}>自适应</Radio.Button>
                            <Radio.Button value="scroll">滚动条</Radio.Button>
                            <Radio.Button value="fixed">固定列</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="列宽">
                        <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
                            <Radio.Button value={undefined}>自适应</Radio.Button>
                            <Radio.Button value="fixed">固定</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="头部分页">
                        <Radio.Group
                            value={this.state.top}
                            onChange={e => {
                                this.setState({ top: e.target.value });
                            }}
                        >
                            <Radio.Button value="topLeft">左上</Radio.Button>
                            <Radio.Button value="topCenter">中上</Radio.Button>
                            <Radio.Button value="topRight">右上</Radio.Button>
                            <Radio.Button value="none">无</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="底部分页">
                        <Radio.Group
                            value={this.state.bottom}
                            onChange={e => {
                                this.setState({ bottom: e.target.value });
                            }}
                        >
                            <Radio.Button value="bottomLeft">左下</Radio.Button>
                            <Radio.Button value="bottomCenter">中下</Radio.Button>
                            <Radio.Button value="bottomRight">右下</Radio.Button>
                            <Radio.Button value="none">无</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <Table
                    {...this.state}
                    pagination={{ position: [this.state.top, this.state.bottom] }}
                    columns={columnsTable}
                    dataSource={state.hasData ? dataTable : null}
                    scroll={scroll}
                    onRow={record => {
                        return {
                            onDoubleClick: event => { this.handleDoubleClickRow(record, event) },
                        }
                    }
                    }
                />
                <ModalContent visible={visible} />
            </>
        );
    }
}

export default TableDemo