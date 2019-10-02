import React from 'react';

/* Redux */
import store from '../../redux/store';
import {connect} from "react-redux";
import {addLocal, addAbroad, deleteAbroad, deleteLocal} from "../../redux/actions/sections/newsActions";
import {addItem, changeItem} from "../../redux/actions/switchActions";
import {addCake, addCoffee, deleteCake, deleteCoffee} from "../../redux/actions/sections/cafeActions";

/* Components and layouts */
import Standard from "../../layouts/Standard";
import HomeBox from "../../layouts/box/HomeBox";
import styles from '../../scss/modules/exports/sections.module.scss';

/* Containers */
import HomeCafeContainer from "./sections/main/HomeCafeContainer";
import HomeNewsContainer from "./sections/main/HomeNewsContainer";
import HomeShoppingContainer from "./sections/main/HomeShoppingContainer";
import HomePreviewContainer from "./HomePreviewContainer";
import HomeNavigationContainer from "./HomeNavigationContainer";
import HomeHeaderContainer from "./HomeHeaderContainer";
import HomeTVContainer from "./sections/main/HomeTVContainer";
import HomeWeatherContainer from "./sections/main/HomeWeatherContainer";
import HomeChildrenContainer from "./planning/HomeChildrenContainer";

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

export const Home: React.FC<AppProps> = (props) => {
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
            </main>

            <footer className='footer-bottom'>
                <Standard version={'v0.1.8'}/>
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
)(Home);

export default AppContainer;

