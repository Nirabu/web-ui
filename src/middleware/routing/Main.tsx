import React from 'react';
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import {CafeContainer} from "../../containers/cafe/CafeContainer";
import {NewsContainer} from "../../containers/news/NewsContainer";

import {Home} from "../../containers/home/Home";


export const Main = () => (
    <RouterSwitch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cafe' component={CafeContainer}/>
        <Route exact path='/news' component={NewsContainer}/>
        <Route exact path='/shopping' component={NewsContainer}/>
    </RouterSwitch>
);
