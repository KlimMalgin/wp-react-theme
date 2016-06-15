/**
 * Форма редактирования пользовательского контента
 */

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Input, Row, Col, Button } from 'react-bootstrap';

import '../../guide/form/form.less'
import '../../guide/input/input.less'
import '../../guide/button'

export const fields = [ 'trackName', 'trackDescription', 'trackFoto', 'trackFile' ]

class EditContentForm extends Component {
  render() {
    const {
      fields: { trackName, trackDescription, trackFoto, trackFile },
      handleSubmit,
      submitting
      } = this.props
    let proportions = {
      empty: 2,
      form: 8
    }
      // TODO: 
      // Название трека
      // Описание трека
      // Фоточка
      // Файл / Ссылка на файл
    return (
    <Row>
      <Col sm={proportions.empty} md={proportions.empty} />
      <Col sm={proportions.form} md={proportions.form}>
        <form className='edit-content-form guide-form' onSubmit={handleSubmit}>
            <label>Название трека</label>
            <Input type='text'  className='guide-input' {...trackName} />
            
            <label>Описание трека</label>
            <Input type='text'  className='guide-input' {...trackDescription} />
            
            <label>Загрузка фото</label>
            <Input type='text' className='guide-input' {...trackFoto} />
            
            <label>Ссылка на трек</label>
            <Input type='text'  className='guide-input' {...trackFile} />
          
          <div>
            <Button type='submit' className='guide-button _submit' disabled={submitting}>Submit</Button>
          </div>
        
        </form>
      </Col>
      <Col sm={proportions.empty} md={proportions.empty} />
    </Row>
    )
  }
}

EditContentForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'editcontentform',
  fields
})(EditContentForm);
