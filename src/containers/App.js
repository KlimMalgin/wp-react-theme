import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
  
  childrenData () {
    return this.props[this::location.currentRoute()] || {};
  }
  
  render() {
    const { /*user,*/ search, shadow } = this.props
    
    const headerActions = merge(this.props.actions.search, this.props.actions.shadow)
    return <div>
      <Shadow shadow={shadow} actions={this.props.actions.shadow} />
      <Header search={search} actions={headerActions}>some header</Header>
      <Sidebar>sidebar block</Sidebar>
      <Content>
        {React.cloneElement(this.props.children, { actions: this.childrenActions(), data: this.childrenData() })}
      </Content>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    search: state.search,
    shadow: state.shadow
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(actions.search, dispatch),
      shadow: bindActionCreators(actions.shadow, dispatch),
      user: bindActionCreators(actions.user, dispatch) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
