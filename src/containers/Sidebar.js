import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import { Navbar } from 'react-bootstrap';

export default class Sidebar extends Component {
    render () {
        return <Navbar className='navbar-default navbar-static-side'>
            {this.props.children}
        </Navbar>
    }
}