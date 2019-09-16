import React from 'react';
import {connect} from "react-redux";
import {showText, hideText} from "./redux/actions/text";

import {Main} from "./containers/home/Main";
import {Account} from "./presentations/components/navigations/bars/Account";
import Temperature from "./presentations/components/display/weather/Temperature";
import {withRouter} from 'react-router-dom';
import {PortalNav} from "./presentations/components/navigations/bars/PortalNav";
import Tour from "./presentations/components/navigations/bars/Tour";
import SearchBox from "./presentations/components/inputs/searchfields/SearchBox";
import Circle from "./presentations/components/graphics/shapes/Circle";
import Biggest from "./presentations/components/display/titles/Biggest";
import Standard from "./presentations/layouts/footer/Standard";
import HomeBox from "./presentations/layouts/Box/HomeBox";
import {Home} from "./containers/home/Home";
import Box from "./presentations/components/display/titles/Box";
import Switcher from "./presentations/components/navigations/Switcher";

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
                    <Circle/>
                </div>

                <article className='search-nimado'>
                    <SearchBox/>
                </article>

                <nav className='nav-account'>
                    <Account/>
                </nav>
            </header>

            <nav className='nav-nimado'>
                <PortalNav/>
            </nav>

            <main className='content-nimado'>
                <div className='home-top'>
                    <div className='home-top-container'>
                        <div className='home-top-header'>
                            <Box title='Top'/>
                        </div>

                        <div className='home-cafe-main'>
                            <div className='Recipes'>
                                <h5 style={{marginTop: 0}}>Desserts</h5>

                                <p>Icecream and cake</p>
                            </div>

                            <div className='blogs'>
                                <h5>Blogs</h5>
                            </div>

                            <div className='Corner'>
                                <h5>Corner</h5>
                            </div>
                        </div>

                        <div className='home-cafe-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-cafe'>
                    <div className='home-cafe-container'>
                        <div className='home-cafe-header'>
                            <Box title='Cafe'/>
                        </div>

                        <div className='home-cafe-main'>
                            <div className='recipes'>
                                <h5 style={{marginTop: 0}}>Desserts</h5>

                                <p>Icecream and cake</p>
                            </div>

                            <div className='blogs'>
                                <h5>Blogs</h5>
                            </div>

                            <div className='Corner'>
                                <h5>Corner</h5>
                            </div>
                        </div>

                        <div className='home-cafe-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-news'>
                    <div className='home-news-container'>
                        <div className='home-news-header'>
                            <Box title='News'/>
                        </div>

                        <div className='home-news-main'>
                            <div className='korea'>
                                <h5 className='seoul'>Seoul</h5>
                                <h5 className='busan'>Busan</h5>
                            </div>

                            <div className='japan'>
                                <h5>Japan</h5>
                            </div>

                            <div className='norway'>
                                <h5>Norway</h5>
                            </div>
                        </div>

                        <div className='home-news-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='home-shopping-container'>
                        <div className='home-shopping-header'>
                            <article className='home-shopping-header-title'>
                                <Box title='Shopping'/>
                            </article>

                            <section className='home-shopping-header-genres'>
                                <Switcher genre1={'Women'} genre2={'Men'}/>
                            </section>
                        </div>

                        <div className='home-shopping-main'>
                            <div className='Clothes'>
                                <h5 style={{marginTop: 0}}>Clothes</h5>

                                <p>Pants</p>
                            </div>

                            <div className='Sweaters'>
                                <h5>Sweaters</h5>
                            </div>

                            <div className='Underwear'>
                                <h5>Underwear</h5>
                            </div>
                        </div>

                        <div className='home-shopping-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-tv'>
                    <div className='home-tv-container'>
                        <div className='home-tv-header'>
                            <Box title='TV'/>
                        </div>

                        <div className='home-tv-main'>
                            <div className='Clothes'>
                                <h5 style={{marginTop: 0}}>Clips</h5>

                                <p>Drama</p>
                            </div>

                            <div className='Sweaters'>
                                <h5>Trailers</h5>
                            </div>

                            <div className='Underwear'>
                                <h5>Episodes</h5>
                            </div>
                        </div>

                        <div className='home-tv-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-weather'>
                    <div className='home-weather-container'>
                        <div className='home-weather-header'>
                            <Box title='Weather'/>
                        </div>

                        <div className='home-weather-main'>
                            <div className='Clothes'>
                                <h5 style={{marginTop: 0}}>Clips</h5>

                                <p>Drama</p>
                            </div>

                            <div className='Sweaters'>
                                <h5>Trailers</h5>
                            </div>

                            <div className='Underwear'>
                                <h5>Episodes</h5>
                            </div>
                        </div>

                        <div className='home-weather-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-children'>
                    <div className='home-children-container'>
                        <div className='home-children-header'>
                            <Box title='Children'/>
                        </div>

                        <div className='home-children-main'>
                            <div className='Clothes'>
                                <h5 style={{marginTop: 0}}>Books</h5>

                                <p>Fairy tails</p>
                            </div>

                            <div className='Sweaters'>
                                <h5>Toys</h5>
                            </div>

                            <div className='Underwear'>
                                <h5>Teddybears</h5>
                            </div>
                        </div>

                        <div className='home-children-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <nav className='home-wise'>
                    <button
                        onClick={() =>
                            props.showText({
                                text: 'You begin to remove' +
                                    ' a mountain by carrying away small stones!'
                            })
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
                <Standard version={'v0.1.5'}/>
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

