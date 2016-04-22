import React, { Component } from 'react'

import SearchInput from '../components/Search/SearchInput'
import SearchPanel from '../components/Search/SearchPanel'


export default class Search extends Component {
    render () {
        return <div className='search'>
            <SearchInput search={this.props.search} actions={this.props.actions} />
            <SearchPanel search={this.props.search} actions={this.props.actions} />
        </div>
    }
}