import React, { Component } from 'react'
import Tag from './Tag'
//import Title from './Title'

export default class SearchPanel extends Component {
    
    renderTag (tag) {
        const { selectGenre, unSelectGenre } = this.props.actions 
        return <Tag onClick={() => (tag.selected ? unSelectGenre : selectGenre)(tag)} data={tag} />
    }
    
    renderTagByAlphabet () {
        
    }
    
    /*category (category) {
        return <Title name={category} />
    }*/
    
    render () {
        const { renderTag } = this
        const { genres } = this.props.search
        console.log('searchState: %o', this.props.search)
        return <div className='search-panel'>
            {genres.map(renderTag.bind(this))}
        </div>
    }
}