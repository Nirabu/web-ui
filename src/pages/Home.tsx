import React from "react";

/* Redux */
import store from "../redux/store";
import {connect} from "react-redux";
import {
    addLocal,
    addAbroad,
    deleteAbroad,
    deleteLocal
} from "../redux/actions/sections/newsActions";
import {addItem, changeItem} from "../redux/actions/switchActions";
import {
    addCake,
    addCoffee,
    deleteCake,
    deleteCoffee
} from "../redux/actions/sections/cafeActions";

/* Components and layouts */

/* functions */

/* Containers */
import DefaultHeader from "../layouts/default/DefaultHeader";
import DefaultFooter from "../layouts/default/DefaultFooter";
import BoxContainer from "../containers/BoxContainer";
import {TitleMedium} from "../components/Titles";
import {TitleBig} from "../components/Titles";

import BoxContent from "./../layouts/BoxContent";

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

            <main className="home-main">
                <div className="home-main-header">
                    <div className="home-main-header-title"> </div>
                </div>

                <div className="home-main-cafe">
                    <div className="box-cafe">
                        <BoxContent
                            titleHeader="Cafe content"
                            button1={"Confirm"}
                            button2={"Cancel"}
                        />
                    </div>
                </div>

                <div className="home-main-news">
                    <div className="box-news">
                        <BoxContent
                            titleHeader="News content"
                            button1={"Confirm"}
                            button2={"Cancel"}
                        />
                    </div>
                </div>

                <div className="home-main-shopping">
                    <div className="box-shopping">
                        <BoxContent
                            titleHeader="Shopping content"
                            button1={"Confirm"}
                            button2={"Cancel"}
                        />
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <DefaultFooter version={"v0.1.9"}/>
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
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (text: string) => dispatch(changeItem(text)),
        addCoffee: (coffee: string) => dispatch(addCoffee(coffee)),
        addLocal: (local: string) => dispatch(addLocal(local))
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default AppContainer;
