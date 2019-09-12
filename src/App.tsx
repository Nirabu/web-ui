import React from 'react';
import {connect} from "react-redux";
import {showText, hideText} from "./redux/actions/text";

import {Main} from "./containers/Main";
import {Account} from "./presentations/components/navigations/navigationbar/Account";
import {Weather} from "./presentations/components/display/Weather";
import { withRouter } from 'react-router-dom';
import {PortalNav} from "./presentations/components/navigations/navigationbar/PortalNav";
import {Tour} from "./presentations/components/navigations/navigationbar/Tour";

interface AppProps {
    color: any;
    showText: any;
    hideText: any;
}

export const App: React.FC<AppProps> = (props) => {
    return (
        <div className='App'>

            <div className='taskbar'>
                <h1>Nimado</h1>
                <nav className='account'>
                    <Account />
                </nav>
            </div>

            <main className='mainContent'>
                <PortalNav/>
                <nav className='text'>
                    <button
                        onClick={() =>
                            props.showText({text: 'Power!'})
                        }
                    >
                        Show text
                    </button>

                    <button
                        onClick={() =>
                            props.hideText()
                        }
                    >
                        Hide text
                    </button>

                <p>{props.color.text}</p>
                </nav>
            </main>
        </div>
    );
};

// AppContainer.js
const mapStateToProps = (state: any) => ({
    color: state.color,
});

const mapDispatchToProps = {
    showText,
    hideText
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

