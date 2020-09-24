import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Zones from './Zones';
import Home from './Home';

class Vegetables extends Component {
  render() {
    return (
      <div>
        VEGETABLES
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/zones" component={props => <Zones {...props} />} />
          <Route path="/flowers" component={props => <Flowers {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default Vegetables
