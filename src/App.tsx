import React from 'react';

import {Main} from "./containers/Main";
import {Account} from "./presentations/components/navigations/navigationbar/Account";
import {Weather} from "./presentations/components/display/Weather";

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
