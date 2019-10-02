import React from 'react';
import { Provider } from 'react-redux'
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import {HomeContainer} from "../../containers/home/HomeContainer";
import {ChildrenContainer} from "../../containers/planning/children/ChildrenContainer";
import {Aquarium} from "../../containers/considerations/aquarium/Aquarium";
import {CafeContainer} from "../../containers/cafe/CafeContainer";
import {CinemaContainer} from "../../containers/planning/cinema/CinemaContainer";
import {Garden} from "../../containers/considerations/garden/Garden";
import {NewsContainer} from "../../containers/news/NewsContainer";

export const Main = () => (
    <RouterSwitch>
        <Route exact path='/' component={HomeContainer}/>
        <Route exact path='/playground' component={ChildrenContainer}/>
        <Route exact path='/aquarium' component={Aquarium}/>
        <Route exact path='/garden' component={Garden}/>
        <Route exact path='/cafe' component={CafeContainer}/>
        <Route exact path='/news' component={NewsContainer}/>
        <Route exact path='/cinema' component={CinemaContainer}/>
        <Route exact path='/news' component={NewsContainer}/>
    </RouterSwitch>
);
