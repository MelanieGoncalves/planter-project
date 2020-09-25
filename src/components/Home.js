import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Zones from './Zones';
import Vegetables from './Vegetables';

function Home(){
    return (
      <div>
        HOME
        <Switch>
          <Route exact path="/zones" component={props => <Zones {...props} />} />
          <Route path="/vegetables" component={props => <Vegetables {...props} />} />
          <Route path="/flowers" component={props => <Flowers {...props} />} />
        </Switch>
      </div>
    )
}

export default Home
