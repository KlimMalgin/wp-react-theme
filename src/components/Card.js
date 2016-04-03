import React, { PropTypes, Component } from 'react'
import Separator from './Separator'

import FontAwesome from 'react-fontawesome'

export default class Card extends Component {
  render() {
    const { user, data, info } = this.props.data
    return <div className='card'>
        <div className='card__body'>
            <div className='card__info'>
                <div className='card__user'>
                    <div className='card__user-avatar'>
                        <img src={user.avatar} />
                    </div>
                    <div className='card__user-name'>
                        {user.name}
                    </div>
                </div>
            </div>
            <Separator />
            <div className='card__content'>
                {data.text}
            </div>
            <Separator />
            <div className='card__counters'>
                <div className='card__counters-comment'>
                    <FontAwesome className='card__comment-icon fa-fw' name='comment-o' /> {info.comments} 
                </div>
                <div className='card__counters-like'>
                    <FontAwesome className='card__comment-icon fa-fw' name='heart-o' /> {info.likes} 
                </div>
            </div>
        </div>
        <div className='card__comments'>
            <textarea className='card__comments-textarea'></textarea>
        </div>
    </div>
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}
