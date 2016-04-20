import React, { Component } from 'react'
//import Title from './Title'

export default class Search extends Component {
    
    genre (genre) {
        return <span className='genre'>{genre.name}</span>
    }
    /*category (category) {
        return <Title name={category} />
    }*/
    
    render () {
        return <div className='search-panel'>
            {this.props.search.genres.map((item) => this.genre(item))}
        </div>
    }
}