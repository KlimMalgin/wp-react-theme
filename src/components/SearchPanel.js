import React, { Component } from 'react'

export default class Search extends Component {
    
    tag (tag) {
        return <span className='tag'>{tag.name}</span>
    }
    
    render () {
        return <div className='search-panel'>
            {this.props.search.tags.map((item) => this.tag(item))}
        </div>
    }
}