import React, { PropTypes, Component } from 'react'

export default class UserHead extends Component {
  render() {
    //const { name } = this.props
    
    // TODO: Пора делать подгрузку данных через редьюсеры
    
    return <div className='userhead'>
        <div className='userhead__cover userhead__backimage'></div>
        <div className='userhead__info'>
            <div className='userhead__avatar'>
                
            </div>
            <div className='userhead__cover'></div>
        
        </div>
        
    </div>
  }
}

UserHead.propTypes = {
  name: PropTypes.string.isRequired
}
