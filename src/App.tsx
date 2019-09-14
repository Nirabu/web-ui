import React from 'react';
import {connect} from "react-redux";
import {showText, hideText} from "./redux/actions/text";

import {Main} from "./containers/portal/Main";
import {Account} from "./presentations/components/navigations/bars/Account";
import Temperature from "./presentations/components/display/weather/Temperature";
import { withRouter } from 'react-router-dom';
import {PortalNav} from "./presentations/components/navigations/bars/PortalNav";
import {Tour} from "./presentations/components/navigations/bars/Tour";
import SearchBox from "./presentations/components/inputs/searchfields/SearchBox";
import Circle from "./presentations/components/display/shapes/Circle";
import Biggest from "./presentations/components/display/titles/Biggest";

interface AppProps {
    color: any;
    showText: any;
    hideText: any;
}

export const App: React.FC<AppProps> = (props) => {
    return (
        <div className='App'>

            <header className='header-top'>
                <div className='title-nimado'>
                    <Biggest title='Nimado'/>
                </div>

                <article className='icon-nimado'>
                    <Circle />
                </article>

                <article className='search-nimado'>
                    <SearchBox />
                </article>

                <nav className='nav-account'>
                    <Account />
                </nav>
            </header>

            <nav className='nav-nimado'>
                <PortalNav/>
            </nav>

            <main className='content-nimado'>
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

            <footer className='footer-bottom'>
                <p className='copyright-nimado'>Copyright Nimado corp. All Rights Reserved.</p>
                <p className='version-nimado'>Version 0.1.2</p>
            </footer>
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

