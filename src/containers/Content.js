import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

//import { Navbar } from 'react-bootstrap';

import UserHead from '../components/UserHead'

export default class Content extends Component {
    render () {
        
        const data = {
            user: {
                avatar: {
                  urls: {
                    min: 'http://placehold.it/32x32',
                    medium: 'http://placehold.it/96x96'
                  }
                },
                name: 'User Name'
            }
        }
        
        return <div className='content'>
            <UserHead data={data} />
            <div className='container-fluid'>
                {this.props.children}
            </div>
        </div>
    }
}
