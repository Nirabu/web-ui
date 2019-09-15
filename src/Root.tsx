import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';
import App from './App';
import {Home} from "./containers/home/Home";
import {Playground} from "./containers/children/Playground";
import {Aquarium} from "./containers/considerations/aquarium/Aquarium";
import {Garden} from "./containers/considerations/garden/Garden";
import {Cafe} from "./containers/cafe/Cafe";
import {News} from "./containers/news/News";
import {Tv} from "./containers/tv/Tv";

interface RootProps {
    store: any;
}
const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App}/>
            <Route exact path='/portal' component={Home}/>
            <Route exact path='/playground' component={Playground}/>
            <Route exact path='/aquarium' component={Aquarium}/>
            <Route exact path='/garden' component={Garden}/>
            <Route exact path='/cafe' component={Cafe}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/cinema' component={Tv}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;