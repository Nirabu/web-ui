import React from 'react';
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';


import {Portal} from "./portal/Portal";
import {Playground} from "./tour/playground/Playground";
import {Aquarium} from "./tour/aquarium/Aquarium";
import {Cafe} from "./tour/cafe/Cafe";
import {Cinema} from "./cinema/Cinema";
import {Garden} from "./tour/garden/Garden";
import {News} from "./news/News";


export const Main = () => (
    <RouterSwitch>
        <Route exact path='/' component={Portal}/>
        <Route exact path='/playground' component={Playground}/>
        <Route exact path='/aquarium' component={Aquarium}/>
        <Route exact path='/garden' component={Garden}/>
        <Route exact path='/cafe' component={Cafe}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/cinema' component={Cinema}/>
        <Route exact path='/news' component={News}/>
    </RouterSwitch>
);
