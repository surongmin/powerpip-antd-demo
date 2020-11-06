import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import ModalTree from '../ModalTree'

const style = { background: '#0092ff', padding: '8px 0' };
class ModalContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      // visible: false,
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
    })
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <Modal
        width={1000}
        visible={visible}
        title="人员选择"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            取消
            </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            确认
            </Button>,
        ]}
      >
        <ModalTree />
      </Modal>
    );
  }
}

export default ModalContent