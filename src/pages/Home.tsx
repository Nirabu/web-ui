import * as React from "react";
/* Redux. */
/* Layouts. */
import DefaultFooter from "./../layouts/default/DefaultFooter";
/* Containers. */
import HomeCafeContainer from "../containers/home/HomeCafeContainer";
import HomeNewsContainer from "../containers/home/HomeNewsContainer";
import HomeShoppingContainer from "../containers/home/HomeShoppingContainer";
import {NavAccount, NavTour} from "../components/Navigations";
import {SearchBox} from "../components/Search";
import {TitleMedium} from "../components/Titles";
import {mainChapter9} from "../functions/ecmascript/chapter9";
import {Temperature} from "../components/Weather";

interface AppProps {
    value?: string;
}

const Home: React.FC<AppProps> = (props) => {
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
                    <Temperature degrees={30} humid={2}/>
                </article>

                <article className='home-header-nav'>
                    <NavTour />
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
                <DefaultFooter version={`v0.2.6`}/>
            </footer>
        </div>
    );
};

export default Home;

