import React from 'react';
import {connect} from "react-redux";
import {showText, hideText} from "./redux/actions/text";

import {Main} from "./containers/home/Main";
import {Account} from "./presentations/components/navigations/bars/Account";
import Temperature from "./presentations/components/display/weather/Temperature";
import { withRouter } from 'react-router-dom';
import {PortalNav} from "./presentations/components/navigations/bars/PortalNav";
import Tour from "./presentations/components/navigations/bars/Tour";
import SearchBox from "./presentations/components/inputs/searchfields/SearchBox";
import Circle from "./presentations/components/display/shapes/Circle";
import Biggest from "./presentations/components/display/titles/Biggest";
import Standard from "./presentations/layouts/footer/Standard";

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
                    <Biggest title='Nitji'/>
                    <Circle />
                </div>

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

                <div className='home-top'>
                    <h4>Top</h4>
                    <p>Read</p>
                    <p>Discussed</p>
                </div>

                <div className='home-cafe'>
                    <h4>Cafe</h4>
                    <p>Recipes</p>
                    <p>Blogs</p>
                    <p>Study</p>
                </div>

                <div className='home-news'>
                    <h4>News</h4>
                    <p>Big headlines</p>
                    <p>Smaller headlines</p>
                    <p>Categories</p>
                </div>

                <div className='home-shopping'>
                    <h4>Shopping</h4>
                    <p>Offers</p>
                    <p>Popular</p>
                </div>

                <div className='home-tv'>
                    <h4>TV</h4>
                    <p>New episode</p>
                    <p>Trailers</p>
                </div>

                <div className='home-weather'>
                    <h4>Weather</h4>
                    <p>Temperature</p>
                    <p>Weather-type</p>
                    <p>Locations</p>
                    <p>Predictions</p>
                </div>

                <div className='home-children'>
                    <h4>Children</h4>
                    <p>Books</p>
                    <p>Exercises</p>
                </div>

                <nav className='home-wise'>
                    <button
                        onClick={() =>
                            props.showText({text: 'You begin to remove' +
                                    ' a mountain by carrying away small stones!'})
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
                <Standard version={'v0.1.3'}/>
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

