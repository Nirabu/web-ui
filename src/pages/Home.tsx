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
import Introduction from "../layouts/Introduction";
import Boxes from "../layouts/Boxes";
import Ending from "../layouts/Ending";

interface AppProps {
    value?: string;
}

const Home: React.FC<AppProps> = (props) => {
    return (
        <div className="home">
            <header className="introduction">
                <Introduction />
            </header>

            <main className="boxes">
                <Boxes/>
            </main>

            <footer className="ending">
                <Ending />
            </footer>
        </div>
    );
};

export default Home;

