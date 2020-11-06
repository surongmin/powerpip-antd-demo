import { Table, Switch, Radio, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

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

const TableDemo = () => {
    const [bordered, setBordered] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({ position: '' })
    const [size, setSize] = useState('default')
    const [expandable, setExpandable] = useState(undefined)
    const [title, setTitle] = useState(undefined)
    const [showHeader, setShowHeader] = useState()
    const [footer, setFooter] = useState()
    const [rowSelection, setRowSelection] = useState({})
    const [scroll, setScroll] = useState(undefined)
    const [hasData, setHasData] = useState(true)
    const [tableLayout, setTableLayout] = useState(undefined)
    const [top, setTop] = useState('none')
    const [bottom, setBottom] = useState('bottomRight')
    const [ellipsis, setEllipsis] = useState('')
    const [xScroll, setXScroll] = useState('')
    const [yScroll, setYScroll] = useState('')

    // state = {
    //     bordered: false,
    //     loading: false,
    //     pagination,
    //     size: 'default',
    //     expandable,
    //     title: undefined,
    //     showHeader,
    //     footer,
    //     rowSelection: {},
    //     scroll: undefined,
    //     hasData: true,
    //     tableLayout: undefined,
    //     top: 'none',
    //     bottom: 'bottomRight',
    // };

    const handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    const handleTableLayoutChange = e => {
        console.log(e.target.value)
        setTableLayout(e.target.value);
    };

    const handleExpandChange = enable => {
        setExpandable(enable ? expandable : undefined);
    };

    const handleEllipsisChange = enable => {
        setEllipsis(enable);
    };

    const handleTitleChange = enable => {
        setTitle(enable ? title : undefined);
    };

    const handleHeaderChange = enable => {
        setShowHeader(enable ? showHeader : false);
    };

    const handleFooterChange = enable => {
        setFooter(enable ? footer : undefined);
    };

    const handleRowSelectionChange = enable => {
        setRowSelection(enable ? {} : undefined);
    };

    const handleYScrollChange = enable => {
        this.setState({ yScroll: enable });
    };

    const handleXScrollChange = e => {
        this.setState({ xScroll: e.target.value });
    };

    const handleDataChange = hasData => {
        setHasData(hasData);
    };

    // const { xScroll, yScroll, ...state } = state;

    const scrollxy = {};
    if (yScroll) {
        scrollxy.y = 240;
    }
    if (xScroll) {
        scrollxy.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: ellipsis }));
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
                    <Switch checked={bordered} onChange={handleToggle('bordered')} />
                </Form.Item>
                <Form.Item label="加载">
                    <Switch checked={loading} onChange={handleToggle('loading')} />
                </Form.Item>
                <Form.Item label="标题">
                    <Switch checked={!!title} onChange={handleTitleChange} />
                </Form.Item>
                <Form.Item label="表头">
                    <Switch checked={!!showHeader} onChange={handleHeaderChange} />
                </Form.Item>
                <Form.Item label="底部">
                    <Switch checked={!!footer} onChange={handleFooterChange} />
                </Form.Item>
                <Form.Item label="扩展">
                    <Switch checked={!!expandable} onChange={handleExpandChange} />
                </Form.Item>
                <Form.Item label="复选框">
                    <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
                </Form.Item>
                <Form.Item label="固定表头">
                    <Switch checked={!!yScroll} onChange={handleYScrollChange} />
                </Form.Item>
                <Form.Item label="数据">
                    <Switch checked={!!hasData} onChange={handleDataChange} />
                </Form.Item>
                <Form.Item label="省略">
                    <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
                </Form.Item>
                <Form.Item label="大小">
                    <Radio.Group value={size} onChange={handleSizeChange}>
                        <Radio.Button value="default">默认</Radio.Button>
                        <Radio.Button value="middle">中等</Radio.Button>
                        <Radio.Button value="small">小</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="表格样式">
                    <Radio.Group value={xScroll} onChange={handleXScrollChange}>
                        <Radio.Button value={undefined}>自适应</Radio.Button>
                        <Radio.Button value="scroll">滚动条</Radio.Button>
                        <Radio.Button value="fixed">固定列</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="列宽">
                    <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
                        <Radio.Button value={undefined}>自适应</Radio.Button>
                        <Radio.Button value="fixed">固定</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="头部分页">
                    <Radio.Group
                        value={top}
                        onChange={e => {
                            setTop(e.target.value);
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
                        value={bottom}
                        onChange={e => {
                            setBottom(e.target.value);
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
                bordered
                loading
                size
                expandable
                title
                showHeader
                footer
                rowSelection
                tableLayout
                top
                bottom
                pagination={{ position: [top, bottom] }}
                columns={tableColumns}
                dataSource={hasData ? data : null}
                scroll={scroll}
            />
        </>
    );
}

export default TableDemo