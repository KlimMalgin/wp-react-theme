import React, { Component } from 'react'
import Tag from './Tag'
//import Title from './Title'

export default class SearchPanel extends Component {
    
    renderTag (tag) {
        return <Tag onClick={() => this.props.actions.selectGenre(tag)} data={tag} />
    }
    /*category (category) {
        return <Title name={category} />
    }*/
    
    isNotSelected (tag) {
        return !tag.selected
    }
    
    render () {
        const { renderTag } = this
        const { genres } = this.props.search
        return <div className='search-panel'>
            {genres.map(renderTag.bind(this))}
        </div>
    }
}