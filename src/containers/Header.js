import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

/*import SearchInput from '../components/Search/SearchInput'
import SearchPanel from '../components/Search/SearchPanel'*/

import Search from './Search'

import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render () {
        return <Navbar fixedTop className='header'>
            <Search search={this.props.search} />
        </Navbar>
    }
}