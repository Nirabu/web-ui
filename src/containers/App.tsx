import React from 'react';
import {connect} from "react-redux";
import {addItem, changeItem} from "../redux/actions/switchActions";
import {addCake, addCoffee, deleteCake, deleteCoffee} from "../redux/actions/sections/cafeActions";

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

interface AppProps {
    item: any;
    addItem: any;
    toggleItem: any;
    value: string;
    text: string;
    add: any;
    coffee: string;
    addCoffee: any;
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
                            contentMain={props.coffee}
                            contentFooter={'See also'}
                            color={styles.cafe}
                            value={props.value}
                            add={props.addCoffee}
                            button1={'Sweets'}
                            button2={'Drinks'}
                            text1={'New cakes'}
                            text2={'New coffee'}
                        />
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <HomeBox
                            titleHeader={'News'}
                            titleMain={'Korea'}
                            contentMain={props.text}
                            contentFooter={'See also'}
                            color={styles.news}
                            value={props.value}
                            add={props.add}
                            button1={'Local'}
                            button2={'Abroad'}
                            text1={'New local'}
                            text2={'New abroad'}
                        />
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <HomeBox
                            titleHeader={'Shopping'}
                            titleMain={'Clothes'}
                            contentMain={props.text}
                            contentFooter={'See also'}
                            color={styles.shopping}
                            value={props.value}
                            add={props.add}
                            button1={'Women'}
                            button2={'Men'}
                            text1={'Women'}
                            text2={'Men'}
                        />
                    </div>
                </div>

                <div className='home-tv'>
                    <div className='box-tv box-container'>
                        <HomeBox
                            titleHeader={'TV'}
                            titleMain={'Clothes'}
                            contentMain={props.text}
                            contentFooter={'See also'}
                            color={styles.tv}
                            add={props.add}
                            prop={props}
                            button1={'Trailers'}
                            button2={'Clips'}
                            text1={'Movies'}
                            text2={'Shows'}
                        />
                    </div>
                </div>

                <div className='home-weather'>
                    <div className='box-weather box-container'>
                        <HomeBox
                            titleHeader={'Weather'}
                            titleMain={'Clothes'}
                            contentMain={props.text}
                            contentFooter={'See also'}
                            color={styles.weather}
                            add={props.add}
                            prop={props}
                            button1={'Today'}
                            button2={'Tomorrow'}
                            text1={'Today'}
                            text2={'Tomorrow'}
                        />
                    </div>
                </div>

                <div className='home-children'>
                    <div className='box-children box-container'>
                        <HomeBox
                            titleHeader={'Children'}
                            titleMain={'Clothes'}
                            contentMain={props.text}
                            contentFooter={'See also'}
                            color={styles.children}
                            value={props.value}
                            add={props.add}
                            prop={props}
                            button1={'Books'}
                            button2={'Toys'}
                            text1={'New cakes'}
                            text2={'New coffee'}
                        />
                    </div>
                </div>
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
        value: state.textApp.value,
        coffee: state.cafeReducer.coffee
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
        add: (text:string) => dispatch(changeItem(text)),
        addCoffee: (coffee:string) => dispatch(addCoffee(coffee))
    }
};

// Connect both props and functions.
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

