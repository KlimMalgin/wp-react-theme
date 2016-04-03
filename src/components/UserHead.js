import React, { PropTypes, Component } from 'react'

export default class UserHead extends Component {
  render() {
    const { name } = this.props
    return <div className='userhead'>
        <div className='userhead__cover'></div>
        <div className='userhead__info'>
            <div className='userhead__avatar'></div>
            <div className='userhead__cover'></div>
        
        </div>
        
    </div>
  }
}

UserHead.propTypes = {
  name: PropTypes.string.isRequired
}
