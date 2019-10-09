import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';

/* pages */
import Home from '../../pages/Home';
import Cafe from "../../pages/Cafe";
import News from "../../pages/News";
import Shopping from '../../pages/Shopping';

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