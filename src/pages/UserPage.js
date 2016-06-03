/**
 * Страница ленты материалов
 */

import React, { PropTypes, Component } from 'react'
import UserHead from '../components/UserHead'
import Feed from '../containers/Feed'

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
        //debugger;
        return <div className='userpage'>
            <UserHead user={this.props.data} />
            <Feed />
        </div>
    }
}
