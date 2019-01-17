import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Simple from './components/Simple'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/example1" component={Simple} />
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default Routes
