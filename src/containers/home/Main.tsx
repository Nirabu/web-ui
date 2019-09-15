import React from 'react';
import { Provider } from 'react-redux'
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import {Home} from "./Home";
import {Playground} from "../children/Playground";
import {Aquarium} from "../considerations/aquarium/Aquarium";
import {Cafe} from "../cafe/Cafe";
import {Tv} from "../tv/Tv";
import {Garden} from "../considerations/garden/Garden";
import {News} from "../news/News";

export const Main = () => (
    <RouterSwitch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/playground' component={Playground}/>
        <Route exact path='/aquarium' component={Aquarium}/>
        <Route exact path='/garden' component={Garden}/>
        <Route exact path='/cafe' component={Cafe}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/cinema' component={Tv}/>
        <Route exact path='/news' component={News}/>
    </RouterSwitch>
);
