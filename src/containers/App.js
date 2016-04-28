import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/*import User from '../components/User'
import Page from '../components/Page'*/

import merge from 'merge'

import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Card from '../components/Card'
import Shadow from '../components/Shadow'


import * as pageActions from '../actions/PageActions'
import * as searchActions from '../actions/SearchActions'
import * as shadowActions from '../actions/ShadowActions'


class App extends Component {
  render() {
    const { user, search, shadow } = this.props
    const cardData = {
      user: user,
      data: {
        text: 'Some text Some text Some text Some text Some text Some text Some text Some text Some'
      },
      info: {
        comments: 34,
        shares: 59,
        likes: 128
      }
    }
    const headerActions = merge(this.props.searchActions, this.props.shadowActions)

    return <div>
      <Shadow shadow={shadow} actions={this.props.shadowActions} />
      <Header search={search} actions={headerActions}>some header</Header>
      <Sidebar>sidebar block</Sidebar>
      <Content>
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        
      </Content>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    search: state.search,
    shadow: state.shadow
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),
    shadowActions: bindActionCreators(shadowActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
