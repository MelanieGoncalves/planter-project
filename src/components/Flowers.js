import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Zones from './Zones';
import Vegetables from './Vegetables';
import Home from './Home';

class Flowers extends Component {
  render() {
    return (
      <div>
        FLOWERS
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/zones" component={props => <Zones {...props} />} />
          <Route path="/vegetables" component={props => <Vegetables {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default Flowers

