import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

import merge from 'merge'

import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Shadow from '../components/Shadow'

import * as actions from '../actions'
import { location } from '../utils'

class App extends Component {
  
  childrenActions () {
    return this.props.actions[this::location.currentRoute()] || {};
  }
  
  /**
   * Вернет объект с состоянием текущей страницы и смержеными 
   * в него доп. данными. Например, состояние форм на странице 
   */
  childrenData () {
    let page = this.props[this::location.currentRoute()] || {};
    return {
      // Данные стора для текущей страницы
      data: page,
      // Состояние форм
      form: this.props.form
    };
  }
  
  render() {
    const { search, shadow } = this.props
    //debugger;
    const headerActions = merge(
      this.props.actions.search, 
      this.props.actions.shadow, 
      this.props.actions.modal)
    return <div>
      <Shadow shadow={shadow} actions={this.props.actions.shadow} />
      <Header search={search} actions={headerActions}>some header</Header>
      <Sidebar>sidebar block</Sidebar>
      <Content>
        {React.cloneElement(this.props.children, { actions: this.childrenActions(), page: this.childrenData() })}
      </Content>
      <Modal keyboard show={this.props.modal.show} onHide={this.props.actions.modal.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          some body
        </Modal.Body>
      </Modal>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    search: state.search,
    shadow: state.shadow,
    modal: state.modal,
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(actions.search, dispatch),
      shadow: bindActionCreators(actions.shadow, dispatch),
      modal: bindActionCreators(actions.modal, dispatch),
      user: bindActionCreators(actions.user, dispatch) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
