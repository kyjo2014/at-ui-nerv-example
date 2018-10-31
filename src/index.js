/**
 * @author litianhui
 * @date 2018-10-10
 * @desc test
 */

import Nerv from 'nervjs'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {Provider} from 'nerv-redux'

import './global.scss'

import 'at-ui-style'

import '../static/css/color-dark.css'

import Home from '@view/Home/Home'
import configureStore from './store/store'

const store = configureStore()

class App extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    )
  }
}

Nerv.render(
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById('J_container')
)
