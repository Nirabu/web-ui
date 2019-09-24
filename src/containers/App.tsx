import React from 'react';
import {connect} from "react-redux";
import {addItem, changeItem} from "../redux/actions/switchActions";
import {Account} from "../components/navigations/bars/Account";
import {PortalNav} from "../components/navigations/bars/PortalNav";
import SearchBox from "../components/inputs/searchfields/SearchBox";
import Circle from "../components/graphics/shapes/Circle";
import TitleBig from "../components/display/titles/TitleBig";
import Standard from "../layouts/Standard";
import HomeBox from "../layouts/box/HomeBox";
import TitleMedium from "../components/display/titles/TitleMedium";
import store from '../redux/store';

import styles from '../scss/modules/exports/sections.module.scss';
import {Switcher} from "../components/navigations/Switcher";
import {ADD_ITEM} from "../redux/actions/constants/constants";

interface AppProps {
    item: any;
    addItem: any;
    toggleItem: any;
    value: string;
    text: string;
    add: any;
}

export const App: React.FC<AppProps> = (props) => {

    function showState() {
        console.log(store.getState());
        console.log(props.value);
    }

    return (
        <div className='app'>
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
                            contentFooter={'See also'}
                            color={styles.cafe}
                            value={props.value}
                            add={props.add}
                            prop={props}
                        />
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <HomeBox
                            titleHeader={'News'}
                            titleMain={'Korea'}
                            contentMain={'Seoul. Busan.'}
                            contentFooter={'See also'}
                            color={styles.news}
                            value={props.value}
                        />
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <HomeBox
                            titleHeader={'Shopping'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                            color={styles.shopping}
                            value={props.value}
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
                            color={styles.tv}
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
                            color={styles.weather}
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
                            color={styles.children}
                            value={props.value}
                        />
                    </div>
                </div>
                <Switcher color={'t'} showText={'test'} hideText={'test'}/>
                <button onClick={() => showState()}>State</button>
            </main>

            <footer className='footer-bottom'>
                <Standard version={'v0.1.6'}/>
            </footer>
        </div>
    );
};

/*
 *  Transfers the current Redux store state into the props,
 *  that you want to pass to the presentational components
 *  -- props for the presentational components from the container --
 */
const mapStateToProps = (state: any) => {
    return {
        text: state.textApp.text,
        value: state.textApp.value
    }
};

/*
 * Receives from dispatch and,
 * that you want to inject into
 * presentational components.
 * -- reducer functions for the presentational components from the container --
 */
const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (text:string) => dispatch(changeItem(text))
    }
};

// Connect both props and functions.
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

