import * as React from "react";

import Introduction from "../layouts/Introduction";
import Boxes from "../layouts/Boxes";
import Ending from "../layouts/Ending";

interface AppProps {
    value?: string;
}

const Home: React.FC<AppProps> = (props) => {
    return (
        <div className="home">
            <header className="home__introduction">
                <Introduction />
            </header>

            <main className="home_boxes">

            </main>

            <footer className="home__ending">
                <Ending />
            </footer>
        </div>
    );
};

export default Home;
