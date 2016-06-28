import React, { Component } from 'react'
import Search from './Search'

import { Navbar, Row, Col } from 'react-bootstrap'

//import { modal } from '../actions'

export default class Header extends Component {
    render () {
        let stl = {
            cursor: 'pointer'
        }
        let { showModal } = this.props.actions
        return <Navbar fixedTop fluid className='header'>
            <Row>
                <Col sm={10} md={10} xs={10}>
                    <Search search={this.props.search} actions={this.props.actions} />
                </Col>
                <Col sm={2} md={2} xs={2}>
                    <div style={stl} onClick={showModal}>
                        user pic
                    </div>
                </Col>
            </Row>
        </Navbar>
    }
}