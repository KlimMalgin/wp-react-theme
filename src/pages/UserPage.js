/**
 * Страница ленты материалов
 */

import React, { PropTypes, Component } from 'react'
import UserHead from '../components/UserHead'
import Feed from '../containers/Feed'
import EditContent from '../containers/edit-content'

import { location } from '../utils'

export default class UserPage extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    constructor (props) {
        super(props)
        this.props.actions.getUserData(this.props.params.userId);
        console.log('URL::PARAMS::USERID::%o', this.props.params.userId)
    }
    
    /**
     * Проверит - является ли указанный (expected) роут параметром (paramIndex) URL
     */
    route (expected, paramIndex = 1) { return this::location.currentRoute(paramIndex) == expected; }
    
    renderPageContent () {
        return this.route('user') && this.route('content', 3) ? <EditContent page={this.props.page} /> : <Feed/>;
    }
    
    render() {
        //debugger;
        return <div className='userpage'>
            <UserHead user={this.props.page.data} />
            {this.renderPageContent()}
        </div>
    }
}
