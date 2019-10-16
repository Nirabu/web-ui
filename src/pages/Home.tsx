import * as React from "react";

/* Redux. */
import store from "../redux/store";

/* Layouts. */
import DefaultHeader from "./../layouts/default/DefaultHeader";
import DefaultFooter from "./../layouts/default/DefaultFooter";

/* Containers. */
import HomeCafeContainer from "../containers/home/HomeCafeContainer";
import HomeNewsContainer from "../containers/home/HomeNewsContainer";
import HomeShoppingContainer from "../containers/home/HomeShoppingContainer";

interface AppProps {
    item: any;
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

            <main className="home-main">
                <div className="home-main-header">
                    <div className="home-main-header-title"> </div>
                </div>

                <div className="home-main-cafe">
                    <div className="box-cafe">
                        <HomeCafeContainer/>
                    </div>
                </div>

                <div className="home-main-shopping">
                    <div className="box-shopping">
                        <HomeShoppingContainer/>
                    </div>
                </div>

                <div className="home-main-news">
                    <div className="box-news">
                        <HomeNewsContainer/>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <DefaultFooter version={`v0.2.2`}/>
            </footer>
        </div>
    );
};

export default Home;

