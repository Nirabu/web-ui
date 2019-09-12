import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';
import App from './App';
import {Portal} from "./containers/portal/Portal";
import {Playground} from "./containers/tour/playground/Playground";
import {Aquarium} from "./containers/tour/aquarium/Aquarium";
import {Garden} from "./containers/tour/garden/Garden";
import {Cafe} from "./containers/tour/cafe/Cafe";
import {News} from "./containers/news/News";
import {Cinema} from "./containers/cinema/Cinema";

interface RootProps {
    store: any;
}
const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App}/>
            <Route exact path='/portal' component={Portal}/>
            <Route exact path='/playground' component={Playground}/>
            <Route exact path='/aquarium' component={Aquarium}/>
            <Route exact path='/garden' component={Garden}/>
            <Route exact path='/cafe' component={Cafe}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/cinema' component={Cinema}/>
            <Route exact path='/news' component={News}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;