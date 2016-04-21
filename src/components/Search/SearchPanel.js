import React, { Component } from 'react'
import Tag from './Tag'
//import Title from './Title'

export default class SearchPanel extends Component {
    
    tag (tag) {
        return <Tag onClick={() => this.props.actions.selectGenre(tag)} text={tag.name} />
    }
    /*category (category) {
        return <Title name={category} />
    }*/
    
    render () {
        return <div className='search-panel'>
            {this.props.search.genres.map((item) => this.tag(item))}
        </div>
    }
}