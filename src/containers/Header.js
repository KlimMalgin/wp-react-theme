import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render () {
        return <Navbar fixedTop className='header'>
            {this.props.children}
        </Navbar>
    }
}