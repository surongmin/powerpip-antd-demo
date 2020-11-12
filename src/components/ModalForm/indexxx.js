import React, { Component, useState, useEffect } from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const CollectionCreateForm = (values) => {
    const { state, visible, onCreate, onCancel, handleCodeInputChange, handleNameInputChange, handleAgeInputChange } = values;
    const { codeInputValue, nameInputValue, ageInputValue } = state

    const [form] = Form.useForm();
    console.log(values)

    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };


    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        console.log(values)
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                initialValues={{
                    ['input-number']: 3,
                    ['checkbox-group']: ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <Form.Item label="编号" name="code">
                    <Input onChange={handleCodeInputChange} value={codeInputValue} />
                </Form.Item>
                <Form.Item label="姓名" name="name">
                    <Input onChange={handleNameInputChange} value={nameInputValue} />
                </Form.Item>
                <Form.Item label="年龄" name="age">
                    <InputNumber min={0} max={150} onChange={handleAgeInputChange} defaultValue={ageInputValue} />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

class ModalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible,
            record: {},
            codeInputValue: props.record.code,
            nameInputValue: props.record.code,
            ageInputValue: props.record.age
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
            record: nextProps.record,
            codeInputValue: nextProps.record.code,
            nameInputValue: nextProps.record.name,
            ageInputValue: nextProps.record.age
        })
        console.log(this.props)
    }

    onCreate = (values) => {
        console.log("hasopd")
        console.log('Received values of form: ', values);
        this.setState({
            visible: false,
        })
    };



    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    handleCodeInputChange = (e) => {
        this.setState({
            codeInputValue: e.target.value
        })
    }

    handleNameInputChange = (e) => {
        this.setState({
            nameInputValue: e.target.value
        })
    }

    handleAgeInputChange = (value) => {
        this.setState({
            ageInputValue: value
        })
    }


    render() {
        const { visible, record } = this.state

        console.log(visible)

        return (
            <>
                <CollectionCreateForm
                    visible={visible}
                    state={this.state}
                    onCreate={this.onCreate}
                    onCancel={() => {
                        this.setState({ visible: false });
                    }}
                    handleCodeInputChange={this.handleCodeInputChange}
                    handleNameInputChange={this.handleNameInputChange}
                    handleAgeInputChange={this.handleAgeInputChange}
                />
            </>
        );
    }
};

// const ModalForm = (props) => {

//     const [visible, setVisible] = useState(props.visible);

//     useEffect(() => {
//         if (props.visible && visible) {
//             setVisible(props.visible)
//         }
//     })


//     console.log(props.visible)
//     const onCreate = (values) => {
//         console.log('Received values of form: ', values);
//         setVisible(false);
//     };

//     console.log(visible)

//     return (
//         <>
//             <CollectionCreateForm
//                 visible={visible}
//                 onCreate={onCreate}
//                 onCancel={() => {
//                     setVisible(false);
//                 }}
//             />
//         </>
//     );
// };

export default ModalForm