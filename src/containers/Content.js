import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

//import { Navbar } from 'react-bootstrap';

//import UserHead from '../components/UserHead'

export default class Content extends Component {
    render () {
        return <div className='content'>
            <div className='container-fluid'>
                {this.props.children}
            </div>
        </div>
    }
}
