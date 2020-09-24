import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Zones from './Zones';
import Vegetables from './Vegetables';
import Home from './Home';

function MainContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zones" component={props => <Zones {...props} />} />
      <Route path="/vegetables" component={props => <Vegetables {...props} />} />
      <Route path="/flowers" component={props => <Flowers {...props} />} />
    </Switch>
  )
}

export default MainContainer
