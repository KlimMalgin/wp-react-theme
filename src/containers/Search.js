import React, { Component } from 'react'

import SearchInput from '../components/Search/SearchInput'
import SearchPanel from '../components/Search/SearchPanel'


export default class Search extends Component {
    render () {
        return <div className='search'>
            <SearchInput change={this.props.actions.getGenres} />
            <SearchPanel search={this.props.search} />
        </div>
    }
}