import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput'
import SearchPanel from '../components/SearchPanel'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render () {
        return <Navbar fixedTop className='header'>
            <SearchInput />
            <SearchPanel search={this.props.search} />
        </Navbar>
    }
}