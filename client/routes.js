import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'
import Example6 from './components/Example6'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        <Route path="/example3" component={Example3} />
        <Route path="/example4" component={Example4} />
        <Route path="/example5" component={Example5} />
        <Route path="/example6" component={Example6} />
      </Switch>
    )
  }
}

export default Routes
