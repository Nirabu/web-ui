import React from 'react';

import {Tour} from "../../../presentations/components/navigations/navigationbar/Tour";

import {changeAquarium, changeCafe} from "../../../redux/actions/Categories";
import {connect} from "react-redux";

import '../../../css/layouts/_aquarium.scss';
import {Account} from "../../../presentations/components/navigations/navigationbar/Account";
import {Weather} from "../../../presentations/components/display/Weather";
import {Main} from "../../Main";


interface AppProps {
    color: any;
    changeAquarium: any;
}

export const Aquarium: React.FC<AppProps> = (props) => {
    return (
        <div className='App'>

            <nav className='account'>
                <Account/>
            </nav>

            <article className='weather'>
                <Weather/>
            </article>

            <main className='mainContent'>
                <Main/>
                <p>{props.color.text}</p>
                <button
                    onClick={() =>
                        props.changeAquarium({text: 'Water!'})
                    }
                >
                    Click Me!
                </button>
            </main>

            <footer>
            </footer>
        </div>
    );
};

// AppContainer.js
const mapStateToProps = (state: any) => ({
    color: state.color,
});

const mapDispatchToProps = {
    changeAquarium,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Aquarium);



export default AppContainer;

// interface AquariumProps {
//     color: any;
//     changeAquarium: any;
// }
//
// export const Aquarium: React.FC<AquariumProps> = (props) => {
//     return (
//         <div className='aquarium'>
//             <header className='theme'>
//                 <h2>Nimado Aquarium</h2>
//             </header>
//
//             <nav className='main-navigation'>
//                 <Tour/>
//             </nav>
//
//             <main className='main-content'>
//                 <p>{props.color.text}</p>
//
//                 <button
//                     onClick={() =>
//                         props.changeAquarium({text: 'Power!'})
//                     }
//                 >
//                     Click Me!
//                 </button>
//             </main>
//         </div>
//     )
// };
