import * as React from "react";
/* Redux. */
/* Layouts. */
import DefaultFooter from "./../layouts/default/DefaultFooter";
/* Containers. */
import HomeCafeContainer from "../containers/home/HomeCafeContainer";
import HomeNewsContainer from "../containers/home/HomeNewsContainer";
import HomeShoppingContainer from "../containers/home/HomeShoppingContainer";
import {NavAccount} from "../components/Navigations";
import {Icon} from "@material-ui/core";
import {SearchBox} from "../components/Search";
import {TitleMedium} from "../components/Titles";

interface AppProps {
    value?: string;
}

const Home: React.FC<AppProps> = (props) => {
    function showState() {
        console.log('Result:')
    }

    return (
        <div className="home">
            <header className="home__header">
                <article className='home__header__account'>
                    <NavAccount />
                </article>
                <section className='home__header__search'>
                    <article className='home__header__search__box'>
                        <SearchBox />
                    </article>

                    <article className='home__header__search__title'>
                        <TitleMedium title='Nitji'/>
                    </article>
                </section>

                <article className='home__header__weather'>
                    <p style={{fontSize: '0.7em'}}>Seoul 31 Celsius</p>
                </article>

                <article className='home-header-nav'>
                    <p>Navigation bar</p>
                </article>
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

