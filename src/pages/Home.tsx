import * as React from "react";

/* Redux */
import store from "../redux/store";

/* Components and layouts */
/* functions */
/* Containers */
import DefaultHeader from "./../layouts/default/DefaultHeader";
import DefaultFooter from "./../layouts/default/DefaultFooter";
import BoxLayout from "../layouts/BoxLayout";
import {changeBusan} from '../redux/actions/sections/homeActions';
import HomeCafeContainer from "../containers/home/HomeCafeContainer";
import HomeNewsContainer from "../containers/home/HomeNewsContainer";
import HomeShoppingContainer from "../containers/home/HomeShoppingContainer";

/* images */
const cakeImage = require('../multimedia/images/cake.jpg');
const shoesImage = require('../multimedia/images/shoes.jpg');
const busanImage = require('../multimedia/images/busan.jpg');

interface AppProps {
    item: any;
    addItem?: any;
    toggleItem?: any;
    value?: string;
}

const Home: React.FC<AppProps> = props => {
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
                        <HomeCafeContainer
                            image={cakeImage}
                        />
                    </div>
                </div>

                <div className="home-main-shopping">
                    <div className="box-shopping">
                        <HomeShoppingContainer
                            image={shoesImage}
                        />
                    </div>
                </div>

                <div className="home-main-news">
                    <div className="box-news">
                        <HomeNewsContainer
                            image={busanImage}
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

export default Home;

