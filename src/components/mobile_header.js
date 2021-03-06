import React from 'react';
import {Col, Icon, Menu, Row, Input, Tabs, message, Button, Checkbox, Form, Modal} from 'antd';

const {SubMenu} = Menu;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }

    setModalVisible(value) {

        this.setState({modalVisible: value})
    }

    handleClick(e) {
        if (e.key = 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);

        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit() {

    }

    login(){
        this.setState({modalVisible: true})
    }

    render() {
        let {getFieldProps} = this.props.form;

        const userShow = this.state.hasLogined ?
            <link>
                <Icon type='inbox'/>
            </link>
            :
            <Icon type='setting' onClick={this.login.bind(this)}/>;

        return (
            <div id='mobileheader'>
                <header>
                    <img src="images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>

                <Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modalVisible}
                       onCancel={() => this.setModalVisible(false)}
                       onOk={() => this.setModalVisible(false)} okText='关闭'>
                    <Tabs type='card'>
                        <TabPane tab='注册' key='2'>
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label='账户'>
                                    <Input placeholder='请输入您的帐号' {...getFieldProps('r_userName')}/>
                                </FormItem>
                                <FormItem label='密码'>
                                    <Input type='password'
                                           placeholder='请输入您的密码' {...getFieldProps('r_password')}/>
                                </FormItem>
                                <FormItem label='确认密码'>
                                    <Input type='password'
                                           placeholder='请输入您的密码' {...getFieldProps('r_confirmPassword')}/>
                                </FormItem>
                                <Button type='primary' htmlType='submit'>注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>

                </Modal>
            </div>
        )
    }
}
export default MobileHeader = Form.create({})(MobileHeader);