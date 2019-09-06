import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';


import {Portal} from "../sections/portal/Portal";
import {Entrance} from "../sections/entrance/Entrance";
import {Aquarium} from "../sections/aquarium/Aquarium";
import {Cafe} from "../sections/cafe/Cafe";
import {Cinema} from "../sections/cinema/Cinema";
import {Garden} from "../sections/garden/Garden";
import {News} from "../sections/news/News";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={Portal}></Route>
        <Route exact path='/entrance' component={Entrance}></Route>
        <Route exact path='/aquarium' component={Aquarium}></Route>
        <Route exact path='/garden' component={Garden}></Route>
        <Route exact path='/cafe' component={Cafe}></Route>
        <Route exact path='/news' component={News}></Route>
        <Route exact path='/cinema' component={Cinema}></Route>
        <Route exact path='/news' component={News}></Route>
    </Switch>
);