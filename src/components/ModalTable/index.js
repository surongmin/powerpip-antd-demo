import { useState } from 'react'
import { Table, Space, Col } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const columns = [
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: '编码',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
];

const data = [
    {
        key: '1',
        code: 'liming',
        name: '李明',
    },
    {
        key: '2',
        code: 'liuzhi',
        name: '刘志',
    },
    {
        key: '3',
        code: 'ceshi',
        name: '测试',
    },
];


const ModalTable = () => {

    const columnsSelect = [
        {
            title: '已选中人员',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a onClick={handleDeleteSelect}>Delete</a>
                </Space>
            )
        }
    ];

    const [hasData, setHasData] = useState(false)
    const [dataSelect, setdataSelect] = useState([{
        key: '',
        code: '',
        name: '',
    }])

    const handleDeleteSelect = () => {
        setHasData(false)
    }

    const handleClickRow = (record) => {
        setdataSelect([{ ...record }])
        setHasData(true)
    }
    return (
        <>
            <Col className="gutter-row" span={10}>
                <div style={style}>col-10</div>
                <Table
                    columns={columns}
                    dataSource={data}
                    onRow={record => {
                        return {
                            onClick: event => { handleClickRow(record) }, // 点击行
                        };
                    }}
                />
            </Col>
            <Col className="gutter-row" span={6} >
                <div style={style}>col-6</div>
                <Table
                    columns={columnsSelect}
                    dataSource={hasData ? dataSelect : null}
                    pagination={false}
                />
            </Col>
        </>
    );
};

export default ModalTable
