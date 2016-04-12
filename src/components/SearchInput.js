import React, { Component } from 'react'
import { Input } from 'react-bootstrap';

export default class Search extends Component {
  constructor (props) {
      super(props)
      this.state = {
          value: ''
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

  render() {
    return (
      <Input
        type='text'
        groupClassName='search-input'
        value={this.state.value}
        placeholder='Search'
        bsSize='small'
        ref='input'
        onChange={() => this.handleChange()} />
    );
  }
}