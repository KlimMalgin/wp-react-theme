import React, { Component } from 'react'
import { Input } from 'react-bootstrap'
import cs from 'classnames'
import Tag from './Tag'
//import { getGenres } from '../../actions/SearchActions'

export default class Search extends Component {
  constructor (props) {
      super(props)
      debugger;
      this.state = {
          value: '',
          active: false
      }
  }

  handleChange() {
    let value = this.refs.input.getValue()
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.props.actions.getGenres()
/*    if (value && value.length) {
      this.props.actions.enablePanel()
    } else {
      this.props.actions.disablePanel()
    }*/
    this.setState({
      value: value
    });
  }

  handleFocus() {
    this.props.actions.enableShadow()
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
    const { isSelected, renderTag } = this;
    const tagSelected = this.props.search.selectedCount > 0;
    const rootCls = cs({
        'search-input': true,
        active: this.state.active || tagSelected
      }),
      groupCls = cs({
        __input: true,
        active: this.state.active || tagSelected
      }),
      bgCls = cs({
        __bg: true,
        active: this.state.active || tagSelected
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