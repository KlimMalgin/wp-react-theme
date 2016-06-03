import React, { Component } from 'react'
import Card from '../components/Card'

export default class Feed extends Component {
  render() { 
    const cardData = {
      user: {
          avatar: {
            urls: {
              min: 'http://placehold.it/32x32',
              medium: 'http://placehold.it/96x96'
            }
          },
          name: 'User Name'
        }, // user,
      data: {
        text: 'Some text Some text Some text Some text Some text Some text Some text Some text Some'
      },
      info: {
        comments: 34,
        shares: 59,
        likes: 128
      }
    }
    return <div className='feed'>
        <Card data={cardData} />
        
    
    </div>
  }
}
