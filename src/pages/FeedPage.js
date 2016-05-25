/**
 * Страница ленты материалов
 */

import React, { PropTypes, Component } from 'react'
import Feed from '../containers/Feed'

export default class FeedPage extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    render() {
        return <div className='feedpage'>
            <Feed />
        </div>
    }
}
