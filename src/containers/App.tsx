import React from 'react';

/* Redux */
import store from '../redux/store';
import {connect} from "react-redux";
import {addLocal, addAbroad, deleteAbroad, deleteLocal} from "../redux/actions/sections/newsActions";
import {addItem, changeItem} from "../redux/actions/switchActions";
import {addCake, addCoffee, deleteCake, deleteCoffee} from "../redux/actions/sections/cafeActions";

/* Components and layouts */
import Standard from "../layouts/Standard";
import HomeBox from "../layouts/box/HomeBox";
import styles from '../scss/modules/exports/sections.module.scss';

/* Containers */
import HomeCafeContainer from "./home/HomeCafeContainer";
import HomeNewsContainer from "./home/HomeNewsContainer";
import HomeShoppingContainer from "./home/HomeShoppingContainer";
import HomePreviewContainer from "./home/HomePreviewContainer";
import HomeNavigationContainer from "./home/HomeNavigationContainer";
import HomeHeaderContainer from "./home/HomeHeaderContainer";
import HomeTVContainer from "./home/HomeTVContainer";
import HomeWeatherContainer from "./home/HomeWeatherContainer";
import HomeChildrenContainer from "./home/HomeChildrenContainer";

interface AppProps {
    item: any;
    addItem: any;
    toggleItem: any;
    value: string;
    text: string;
    add: any;
    coffee: string;
    addCoffee: any;
    local: string;
    addLocal: any;
}

export const App: React.FC<AppProps> = (props) => {
    function showState() {
        console.log(store.getState());
        console.log(props.value);
    }

    return (
        <div className='app'>
            <header className='header-top'>
                <HomeHeaderContainer />
            </header>

            <nav className='nav-nimado'>
                <HomeNavigationContainer />
            </nav>

            <main className='content-nimado'>
                <div className='home-top'>
                    <div className='home-top-container'>
                        <HomePreviewContainer/>
                    </div>
                </div>

                <div className='home-cafe'>
                    <div className='box-cafe box-container'>
                        <HomeCafeContainer
                            coffee={props.coffee}
                            value={props.value}
                            color={styles.cafe}
                            addCoffee={props.addCoffee}/>
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <HomeNewsContainer
                            local={props.local}
                            color={styles.weather}
                            value={props.value}
                            addLocal={props.addLocal}
                        />
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <HomeShoppingContainer
                            text={props.text}
                            color={styles.shopping}
                            value={props.value}
                            add={props.add}
                        />
                    </div>
                </div>

                <div className='home-tv'>
                    <div className='box-tv box-container'>
                        <HomeTVContainer
                            text={props.text}
                            color={styles.tv}
                            add={props.add}
                        />
                    </div>
                </div>

                <div className='home-weather'>
                    <div className='box-weather box-container'>
                        <HomeWeatherContainer
                            color={styles.weather}
                            add={props.add}
                            text={props.text}
                        />
                    </div>
                </div>

                <div className='home-children'>
                    <div className='box-children box-container'>
                        <HomeChildrenContainer
                            text={props.text}
                            color={styles.children}
                            value={props.value}
                            add={props.add}
                        />
                    </div>
                </div>
            </main>

            <footer className='footer-bottom'>
                <Standard version={'v0.1.7'}/>
            </footer>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        text: state.textApp.text,
        value: state.textApp.value,
        coffee: state.cafeReducer.coffee,
        local: state.newsReducer.local
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (text: string) => dispatch(changeItem(text)),
        addCoffee: (coffee: string) => dispatch(addCoffee(coffee)),
        addLocal: (local: string) => dispatch(addLocal(local))
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

