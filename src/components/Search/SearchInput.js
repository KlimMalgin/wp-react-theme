import React, { Component } from 'react'
import { Input } from 'react-bootstrap'
import cs from 'classnames'
import Tag from './Tag'
//import { getGenres } from '../../actions/SearchActions'

export default class Search extends Component {
  constructor (props) {
      super(props)
      this.state = {
          value: '',
          active: false
      }
  }

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.props.actions.getGenres()
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  handleFocus() {
    this.setState({
      active: true
    });
  }

  handleBlur() {
    this.setState({
      active: false
    });
  }
  
  isSelected (item) {
    return item.selected == true
  }
  
  renderTag (tag) {
    return <Tag close onCloseClick={() => this.props.actions.unSelectGenre(tag)} data={tag} />
  }

  render() {
    const { isSelected, renderTag } = this
    const rootCls = cs({
        'search-input': true,
        active: this.state.active
      }),
      groupCls = cs({
        __input: true,
        active: this.state.active
      }),
      bgCls = cs({
        __bg: true,
        active: this.state.active
      })
    
    return (
      <div className={rootCls}>
        <div className={bgCls}></div>
        <div className='__tags'>
          {this.props.search.genres.filter(isSelected).map(renderTag.bind(this))}
        </div>
        <Input
          type='text'
          groupClassName={groupCls}
          value={this.state.value}
          placeholder='Search'
          bsSize='small'
          ref='input'
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
          onChange={() => this.handleChange()} />
      </div>
    );
  }
}