import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Tag extends Component {
    
    renderCloseBtn () {
        return this.props.close ? <Button onClick={this.props.onCloseClick}>
            <FontAwesome className='tag__icon fa-fw' name='close' />
        </Button> : null
    }
    
    render () {
        const { text } = this.props;
        return <ButtonGroup onClick={this.props.onClick} className='tag'>
            <Button>{text}</Button>
            {this.renderCloseBtn()}
        </ButtonGroup>
    }
    
}