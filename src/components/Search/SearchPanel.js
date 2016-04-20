import React, { Component } from 'react'
import Tag from './Tag'
//import Title from './Title'

export default class Search extends Component {
    
    genre (genre) {
        return <span className='genre'>[{genre.id} :: {genre.name}]</span>
    }
    
    tag (tag) {
        return <Tag text={tag.name} />
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