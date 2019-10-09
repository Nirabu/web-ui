import React from 'react';

/* Redux */
import store from '../redux/store';
import {connect} from "react-redux";
import {addLocal, addAbroad, deleteAbroad, deleteLocal} from "../redux/actions/sections/newsActions";
import {addItem, changeItem} from "../redux/actions/switchActions";
import {addCake, addCoffee, deleteCake, deleteCoffee} from "../redux/actions/sections/cafeActions";

/* Components and layouts */
import Standard from "../layouts/default/DefaultFooter";
import HomeBox from "../layouts/box/HomeBox";

/* functions */
import {addition, divide} from './../functions/calculations/addtion';

/* Containers */
import DefaultHeader from "../layouts/default/DefaultHeader";
import DefaultFooter from "../layouts/default/DefaultFooter";
import BoxContainer from "../containers/BoxContainer";

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

// TODO: test
export const Home: React.FC<AppProps> = (props) => {
    function showState() {
        console.log(store.getState());
        console.log(props.value);
    }

    return (
        <div className='app'>
            <header className='header-top'>
                <DefaultHeader/>
            </header>

            <nav className='nav-nitji'>

            </nav>

            <main className='content-nitji'>
                <div className='home-top'>
                    <div className='home-top-container'>

                    </div>
                </div>

                <div className='home-cafe'>
                    <div className='box-cafe box-container'>
                        <BoxContainer title='Home'/>
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <BoxContainer title='News'/>
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <BoxContainer title='Shopping'/>
                    </div>
                </div>
            </main>

            <footer className='footer-bottom'>
                <DefaultFooter version={'v0.1.8'}/>
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

