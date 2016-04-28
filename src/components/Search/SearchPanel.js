import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import Tag from './Tag'
import Title from './Title'

export default class SearchPanel extends Component {
    
    renderProgressBag () {
        return <ProgressBar active now={100} />
    }
    
    renderTag (tag) {
        const { selectGenre, unSelectGenre } = this.props.actions 
        return <Tag onClick={() => (tag.selected ? unSelectGenre : selectGenre)(tag)} data={tag} />
    }
    
    renderTagByAlphabet () {
        const { alphabet } = this.props.search;
        const result = [];
        // TODO: Переписать на for...of ?
        for (const key in alphabet) {
            if (!alphabet.hasOwnProperty(key)) continue;
            if (alphabet[key].length) {
                result.push(<Title name={key}>{alphabet[key].map(::this.renderTag)}</Title>);
            }
        }
        return result;
    }
    
    render () {
        const { genres } = this.props.search
        return <div className='search-panel'>
            {genres && genres.length ? this.renderTagByAlphabet() : this.renderProgressBag()}
        </div>
    }
}