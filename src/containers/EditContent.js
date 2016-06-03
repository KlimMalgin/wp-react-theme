/**
 * Контейнер для редактирования(добавления) пользовательских материалов
 */

import React, { PropTypes, Component } from 'react'

export default class UserPage extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    constructor (props) {
        super(props)
        //this.props.actions.getUserData(this.props.params.userId);
    }
    
    render() {
        return <div className='editcontent'>
            <h1>I am EditContent!</h1>
        </div>
    }
}
