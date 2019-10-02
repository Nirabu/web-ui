import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';
import Home from '../../containers/home/Home';
import {HomeContainer} from "../../containers/home/HomeContainer";
import {ChildrenContainer} from "../../containers/planning/children/ChildrenContainer";
import {CafeContainer} from "../../containers/cafe/CafeContainer";
import {NewsContainer} from "../../containers/news/NewsContainer";
import {CinemaContainer} from "../../containers/planning/cinema/CinemaContainer";

interface RootProps {
    store: any;
}
const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={Home}/>
            <Route exact path='/portal' component={HomeContainer}/>
            <Route exact path='/playground' component={ChildrenContainer}/>
            <Route exact path='/cafe' component={CafeContainer}/>
            <Route exact path='/news' component={NewsContainer}/>
            <Route exact path='/cinema' component={CinemaContainer}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;