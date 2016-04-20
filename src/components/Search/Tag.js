import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Tag extends Component {
    
    render () {
        const { text } = this.props;
        return <ButtonGroup className='tag'>
            <Button>{text}</Button>
            <Button>
                <FontAwesome className='tag__icon fa-fw' name='close' />
            </Button>
        </ButtonGroup>
    }
    
}