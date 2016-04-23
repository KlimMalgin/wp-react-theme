import React, { Component } from 'react'
import Separator from '../Separator'

export default class Title extends Component {
  render() {
    const { name } = this.props
    return <div className='title'>
      <h3>{name}</h3>
      <Separator />
      {this.props.children}
    </div>
  }
}

