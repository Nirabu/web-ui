import React from 'react';

import {Main} from "./sections/Main";
import {Account} from "./react/components/navigations/navigationbar/Account";
import {Weather} from "./react/components/display/Weather";

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className='account'>
                <Account/>
            </nav>

            <article className='weather'>
                <Weather/>
            </article>

            <main className='mainContent'>
                <Main/>
            </main>
        </div>
    );
};

export default App;
