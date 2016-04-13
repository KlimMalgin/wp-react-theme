import React, { Component } from 'react'
import Title from './Title'

export default class Search extends Component {
    
    /*tag (tag) {
        return <span className='tag'>{tag.name}</span>
    }*/
    tag (tag) {
        return <Title name={tag.name} />
    }
    
    render () {
        return <div className='search-panel'>
            {this.props.search.tags.map((item) => this.tag(item))}
        </div>
    }
}