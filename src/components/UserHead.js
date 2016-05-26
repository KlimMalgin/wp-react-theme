import React, { PropTypes, Component } from 'react'
//import cfg from '../../config'
import Avatar from './Avatar'

export default class UserHead extends Component {
  render() {
    const { user } = this.props.data
    
    //cfg.files.img.thumbnail
    
    const url = 'http://wallpaperscraft.ru/image/peyzazh_cherno-belye_derevya_oblaka_serost_51968_1920x1080.jpg'
    
    // TODO: Пора делать подгрузку данных через редьюсеры
    
    return <div className='userhead'>
        <div className='userhead__cover'>
            <img src={url} className='userhead__image' />
        </div>
        <div className='userhead__info'>
            <img src={url} className='userhead__image _blur' />
            <Avatar data={user.avatar} size='medium'>{user.name}</Avatar>
        </div>
        
    </div>
  }
}

UserHead.propTypes = {
  data: PropTypes.object.isRequired
}
