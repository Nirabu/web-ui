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
    value?: string;
}

const Home: React.FC<AppProps> = props => {
    function showState() {
        console.log('Result:')
    }
    return (
        <div className="home">
            <header className="home__header">
                <DefaultHeader title={"Nitji"}/>
            </header>

            <main className="home__main">
                <section className="home__main__cafe">
                    <div className="box__cafe">
                        <HomeCafeContainer/>
                    </div>
                </section>

                <section className="home__main__shopping">
                    <div className="box__shopping">
                        <HomeShoppingContainer/>
                    </div>
                </section>

                <section className="home__main__news">
                    <div className="box__news">
                        <HomeNewsContainer/>
                    </div>
                </section>
            </main>

            <footer className="home__footer">
                <DefaultFooter version={`v0.2.5`}/>
            </footer>

            {showState()}
        </div>
    );
};

export default Home;

