import React from 'react';
import {Col, Icon, Menu, Row} from 'antd';

const {SubMenu} = Menu;

export default class MobileFooter extends React.Component {

    constructor(){
        super();
        this.state={
            current:'top'
        }
    }

    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='footer'>
                       &copy;&nbsp;2019 ReactNews. All RightsReserved
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </footer>
        )
    }
}