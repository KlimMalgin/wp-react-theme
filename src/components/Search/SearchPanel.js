import React, { Component } from 'react'
import Title from './Title'

export default class Search extends Component {
    
    /*tag (tag) {
        return <span className='tag'>{tag.name}</span>
    }*/
    category (category) {
        return <Title name={category} />
    }
    
    render () {
        return <div className='search-panel'>
            {this.props.search.alphabet.map((item) => this.category(item))}
        </div>
    }
}