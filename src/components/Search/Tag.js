import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import cs from 'classnames'

export default class Tag extends Component {
    
    renderCloseBtn () {
        return this.props.close ? <Button className='tag__close' onClick={this.props.onCloseClick}>
            <FontAwesome className='tag__icon fa-fw' name='close' />
        </Button> : null
    }
    
    render () {
        const { name, selected } = this.props.data;
        const tagCls = cs({
            tag: true,
            _selected: !!selected
        })
        return <ButtonGroup onClick={this.props.onClick} className={tagCls}>
            <Button className='tag__text'>{name}</Button>
            {this.renderCloseBtn()}
        </ButtonGroup>
    }
    
}