import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Flowers from './Flowers';
import Zones from './Zones';
import Vegetables from './Vegetables';

function MainContainer() {
    return (
        <BrowserRouter>
            <Route exact path="/zones" component={Zones} />
            <Route path="/vegetables" component={Vegetables} />
            <Route path="/flowers" component={Flowers} />
        </BrowserRouter>


    )
}

export default MainContainer
