import React, { Component } from 'react'
import Search from './Search'

import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render () {
        return <Navbar fixedTop className='header'>
            <Search search={this.props.search} actions={this.props.actions} />
        </Navbar>
    }
}