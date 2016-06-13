/**
 * Форма редактирования пользовательского контента
 */

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Input, Row, Col } from 'react-bootstrap';

import '../../guide/form/form.less'
import '../../guide/input/input.less'

export const fields = [ 'firstName', 'lastName' ]

class EditContentForm extends Component {
  render() {
    const {
      fields: { firstName },
      handleSubmit,
      resetForm,
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
          <div>
            <label>Имя</label>
            <div>
              <Input type='text' placeholder='Имя' className='guide-input' {...firstName} />
            </div>
          </div>
          
          <div>
            <button type='submit' disabled={submitting}>
              {submitting ? <i/> : <i/>} Submit
            </button>
            <button type='button' disabled={submitting} onClick={resetForm}>
              Clear Values
            </button>
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
