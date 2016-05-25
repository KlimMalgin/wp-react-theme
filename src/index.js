import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import FeedPage from './pages/FeedPage'
import UserPage from './pages/UserPage'
import './styles/app.less'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={FeedPage}/>
        <Route path='/feed' component={FeedPage}/>
        <Route path='/user' component={UserPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)


/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)

*/