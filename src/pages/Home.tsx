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
import HomeHeader from "../layouts/HomeHeader";
import HomeMain from "../layouts/HomeMain";
import HomeFooter from "../layouts/HomeFooter";

interface AppProps {
    value?: string;
}

const Home: React.FC<AppProps> = (props) => {
    return (
        <div className="home">
            <header className="home__header">
                <HomeHeader />
            </header>

            <main className="home__main">
                <HomeMain/>
            </main>

            <footer className="home__footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Home;

