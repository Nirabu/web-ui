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
import TitleBig from "./presentations/components/display/titles/TitleBig";
import Standard from "./presentations/layouts/footer/Standard";
import HomeBox from "./presentations/layouts/Box/HomeBox";
import {Home} from "./containers/home/Home";
import TitleMedium from "./presentations/components/display/titles/TitleMedium";
import Switcher from "./presentations/components/navigations/Switcher";
import BoxMain from "./presentations/layouts/Box/Parts/BoxMain";

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
                    <TitleBig title='Nitji'/>
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
                            <TitleMedium title='Top'/>
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
                    <div className='box-cafe box-container'>
                        <HomeBox
                            titleHeader={'Cafe'}
                            titleMain={'Desserts'}
                            contentMain={'Cake. Icecream.'}
                            contentFooter={'See also'}/>
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <HomeBox
                            titleHeader={'News'}
                            titleMain={'Korea'}
                            contentMain={'Seoul. Busan.'}
                            contentFooter={'See also'}/>
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <HomeBox
                            titleHeader={'Shopping'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                        />
                    </div>
                </div>

                <div className='home-tv'>
                    <div className='box-tv box-container'>
                        <HomeBox
                            titleHeader={'TV'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                        />
                    </div>
                </div>

                <div className='home-weather'>
                    <div className='box-weather box-container'>
                        <HomeBox
                            titleHeader={'Weather'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                        />
                    </div>
                </div>

                <div className='home-children'>
                    <div className='box-children box-container'>
                        <HomeBox
                            titleHeader={'Children'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                        />
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

