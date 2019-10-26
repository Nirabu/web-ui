import * as React from 'react';
import BoxMain from "./box/parts/BoxMain";
import BoxHeader from "./box/parts/BoxHeader";
import store from "../redux/store";
import {HomeBoxPagination} from "../components/Paginations";

interface HomeBoxProps {
    titleHeader: string;
    contentData: string;
    changeItem: (text: string) => string;
    image?: string;
    loading: boolean;
    buttonName1: string;
    buttonName2: string;
    links: string[];
}

const BoxLayout: React.FC<HomeBoxProps> = (props) => {
    if (props.loading) {
        return <h3>Loading</h3>
    }

    function textEventHandler() {
        props.changeItem('test1');
        console.log(store.getState());
    }

    function textEventHandler2() {
        props.changeItem('test2');
        console.log(store.getState());
    }

    return (
        <div className='boxContent'>
            <header className='boxContent__header'>
                <section className='boxContent__header__title'>
                    <BoxHeader title={props.titleHeader}/>
                </section>

                <section className='boxContent__header__pagination'>
                    <HomeBoxPagination
                        link0={props.links[0]}
                        link1={props.links[1]}
                        link2={props.links[2]}
                    />
                </section>
            </header>

            <main className='boxContent__main'>
                <section className='boxContent__main__picture'>
                    <picture>
                        <source srcSet={props.image} media="(max-width: 24em)"/>
                        <img src={props.image} alt="picture" width="150" height="150"/>
                    </picture>
                </section>

                <section className='boxContent__main__data'>
                    <BoxMain content={props.contentData}/>
                </section>
            </main>

            <footer className='boxContent__footer'>
                <button onClick={() => textEventHandler()}>{props.buttonName1}</button>
                <button onClick={() => textEventHandler2()}>{props.buttonName2}</button>
            </footer>
        </div>
    )
};

// HomeBox.defaultProps = {
//     value: 'It is default now'
// };

export default BoxLayout;
