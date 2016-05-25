/**
 * Страница ленты материалов
 */

import React, { PropTypes, Component } from 'react'
import UserHead from '../components/UserHead'

export default class UserPage extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    render() {
        
        const data = {
            user: {
                avatar: {
                  urls: {
                    min: 'http://placehold.it/32x32',
                    medium: 'http://placehold.it/96x96'
                  }
                },
                name: 'User Name'
            }
        }
        
        return <div className='userpage'>
            <UserHead data={data} />
        </div>
    }
}
