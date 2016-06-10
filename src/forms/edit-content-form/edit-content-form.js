/**
 * Форма редактирования пользовательского контента
 */

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = [ 'firstName' ]

class EditContentForm extends Component {
  render() {
    const {
      fields: { firstName },
      handleSubmit,
      resetForm,
      submitting
      } = this.props
    return (<form className='edit-content-form' onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type='text' placeholder='First Name' {...firstName}/>
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
