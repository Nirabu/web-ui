import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

import {Portal} from "./portal/Portal";
import {Playground} from "./tour/playground/Playground";
import {Aquarium} from "./tour/aquarium/Aquarium";
import {Cafe} from "./tour/cafe/Cafe";
import {Cinema} from "./cinema/Cinema";
import {Garden} from "./tour/garden/Garden";
import {News} from "./news/News";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={Portal}></Route>
        <Route exact path='/playground' component={Playground}></Route>
        <Route exact path='/aquarium' component={Aquarium}></Route>
        <Route exact path='/garden' component={Garden}></Route>
        <Route exact path='/cafe' component={Cafe}></Route>
        <Route exact path='/news' component={News}></Route>
        <Route exact path='/cinema' component={Cinema}></Route>
        <Route exact path='/news' component={News}></Route>
    </Switch>
);