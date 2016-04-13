import React, { Component } from 'react'
import { Input } from 'react-bootstrap'
import cs from 'classnames'
export default class Search extends Component {
  constructor (props) {
      super(props)
      this.state = {
          value: '',
          active: false
      }
  }

  /*validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }*/

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
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

  render() {
    const groupCls = cs({
      'search-input': true,
      active: this.state.active
    })
    
    return (
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
    );
  }
}