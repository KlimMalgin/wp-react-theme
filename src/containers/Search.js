import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import { Input } from 'react-bootstrap';

export default class Search extends Component {
    render () {
        return <div className='search'>
            <Input
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                label="Working example with validation"
                help="Validation is based on string length."
                bsStyle={this.validationState()}
                hasFeedback
                ref="input"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.handleChange} />
        </div>
    }
}