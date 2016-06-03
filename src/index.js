import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import FeedPage from './pages/FeedPage'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'
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
        <IndexRoute component={FeedPage} />
        <Route path='/feed' component={FeedPage} />
        <Route path='/user/:userId' component={UserPage} />
        <Route path='/user/:userId/content/:contentId' component={UserPage} /> { /* :contentId это id материала или 'new' */ }
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
