import React from 'react';
import {connect} from "react-redux";
import {changeAquarium} from "./redux/actions/Categories";

import {Main} from "./containers/Main";
import {Account} from "./presentations/components/navigations/navigationbar/Account";
import {Weather} from "./presentations/components/display/Weather";
import { withRouter } from 'react-router-dom';

interface AppProps {
    color: any;
    changeAquarium: any;
}

export const App: React.FC<AppProps> = (props) => {
    return (
        <div className='App'>

            <nav className='account'>
                <Account/>
            </nav>

            <article className='weather'>
                <Weather/>
            </article>

            <main className='mainContent'>
                <Main/>
                <p>{props.color.text}</p>

                <button
                    onClick={() =>
                        props.changeAquarium({text: 'Power!'})
                    }
                >
                    Click Me!
                </button>
            </main>

            <footer>
            </footer>
        </div>
    );
};

// AppContainer.js
const mapStateToProps = (state: any) => ({
    color: state.color,
});

const mapDispatchToProps = {
    changeAquarium,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

