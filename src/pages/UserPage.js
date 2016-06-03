/**
 * Страница ленты материалов
 */

import React, { PropTypes, Component } from 'react'
import UserHead from '../components/UserHead'
import Feed from '../containers/Feed'
//import { getUserData } from '../actions/UserActions'

export default class UserPage extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    constructor (props) {
        super(props)
        this.props.actions.getUserData(this.props.params.userId);
        console.log('URL::PARAMS::USERID::%o', this.props.params.userId)
    }
    
    render() {
        /*const data = {
            user: {
                avatar: {
                  urls: {
                    min: 'http://placehold.it/32x32',
                    medium: 'http://placehold.it/96x96'
                  }
                },
                name: 'User Name'
            }
        }*/
        //debugger
        return <div className='userpage'>
            <UserHead user={this.props.data} />
            <Feed />
        </div>
    }
}
