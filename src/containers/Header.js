import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render () {
        return <Navbar fixedTop className='header'>
            <SearchInput />
        </Navbar>
    }
}