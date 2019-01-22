import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/first" component={Example1} />
        <Route path="/second" component={Example2} />
        <Route path="/third" component={Example3} />
        <Route path="/fourth" component={Example4} />
        <Route path="/fifth" component={Example5} />
      </Switch>
    )
  }
}

export default Routes
