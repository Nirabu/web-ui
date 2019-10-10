import React, {useEffect} from "react";

/* Redux */
import store from "../redux/store";
import {connect} from "react-redux";

import {addItem, changeItem} from "../redux/actions/switchActions";
import {
    changeCake,
    changeCoffee,
    changeShoes,
    changeSeoul
} from "../redux/actions/sections/homeActions";

/* Components and layouts */
/* functions */
/* Containers */
import DefaultHeader from "./../layouts/default/DefaultHeader";
import DefaultFooter from "./../layouts/default/DefaultFooter";
import BoxContent from "./../layouts/BoxContent";
import { changeBusan } from './../redux/actions/sections/homeActions';

/* images */
const cakeImage = require('../multimedia/images/cake.jpg');
const shoesImage = require('../multimedia/images/shoes.jpg');
const busanImage = require('../multimedia/images/busan.jpg');

interface AppProps {
    item: any;
    addItem: any;
    toggleItem: any;
    value: string;

    coffee: string;
    cake: string;
    shoes: string;
    dress: string;
    busan: string;
    seoul: string;

    changeCoffee: any;
    changeCake: any;
    changeShoes: any;
    changeBusan: any;
}

export const Home: React.FC<AppProps> = props => {
    function showState() {
        console.log(store.getState());
        console.log(props.value);
    }

    return (
        <div className="home">
            <header className="home-header">
                <DefaultHeader title={"Nitji"}/>
            </header>

            <main className="home-main">`
                <div className="home-main-header">
                    <div className="home-main-header-title"> </div>
                </div>
                
                {/*TODO: Add picture, description and icon to box*/}
                <div className="home-main-cafe">
                    <div className="box-cafe">
                        <BoxContent
                            titleHeader="Cafe content"
                            button1={"Recipe"}
                            button2={"Pictures"}
                            contentData={'New type of cake'}
                            image={cakeImage}
                            changeItem={props.changeCake}
                        />
                    </div>
                </div>

                <div className="home-main-shopping">
                    <div className="box-shopping">
                        <BoxContent
                            titleHeader="Shopping content"
                            button1={"Buy"}
                            button2={"Wishlist"}
                            contentData={'New shoes available!'}
                            image={shoesImage}
                            changeItem={props.changeShoes}
                        />
                    </div>
                </div>

                <div className="home-main-news">
                    <div className="box-news">
                        <BoxContent
                            titleHeader="News content"
                            button1={"Read more"}
                            button2={"Read later"}
                            contentData={'Busan opened a new bridge!'}
                            image={busanImage}
                            changeItem={props.changeBusan}
                        />
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <DefaultFooter version={`v0.2.1`}/>
            </footer>
        </div>
    );
};

// TODO: contain changing data.
const mapStateToProps = (state: any) => {
    return {
        coffee: state.cafeReducer.coffee,
        cake: state.cafeReducer.cake,
        shoes: state.shoppingReducer.shoes,
        dress: state.shoppingReducer.dress,
        seoul: state.newsReducer.seoul,
        busan: state.newsReducer.busan,
    };
};

// TODO: These reducers change from default to new state.
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeCoffee: (text: string) => dispatch(changeCoffee(text)),
        changeCake: (text: string) => dispatch(changeCake(text)),
        changeShoes: (text: string) => dispatch(changeShoes(text)),
        changeBusan: (text: string) => dispatch(changeBusan(text))
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default AppContainer;
