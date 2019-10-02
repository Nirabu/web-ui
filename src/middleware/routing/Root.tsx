import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';
import Home from '../../containers/home/Home';
import Shopping from "../../containers/shopping/Shopping";
import Cafe from "../../containers/cafe/Cafe";
import News from "../../containers/news/News";

interface RootProps {
    store: any;
}
const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={Home}/>
            <Route exact path='/cafe' component={Cafe}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/shopping' component={Shopping}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;