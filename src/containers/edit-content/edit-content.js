/**
 * Контейнер для редактирования(добавления) пользовательских материалов
 */

import React, { PropTypes, Component } from 'react'
import EditContentForm, { fields } from '../../forms/edit-content-form'


export default class EditContent extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    
    constructor (props) {
        super(props)
        //this.props.actions.getUserData(this.props.params.userId);
    }
    
    render() {
        console.log('>>', this.props.page);
        return <div className='edit-content'>
            <h1>I am EditContent!</h1>
            <EditContentForm fields={fields} handleSubmit={() => console.log('HANDLE SUBMIT!')} onSubmit={() => console.log('ON SUBMIT!', arguments, this)} resetForm={() => console.log('RESET')} submitting={false} />
        </div>
    }
}
