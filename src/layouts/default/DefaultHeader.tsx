import * as React from 'react';
import {TitleBig} from "../../components/Titles";

import {Circle} from "../../components/Shapes";
import {SearchBox} from "../../components/Search";
import {NavAccount} from "../../components/Navigations";

interface DefaultHeader {
    title: string;
}

const DefaultHeader: React.FC<DefaultHeader> = (props) => {
    return (
        <>
            <header className='default__header__title'>
                <TitleBig title={props.title}/>
            </header>

            <article className='default__header__search'>
                <SearchBox/>
            </article>

            <nav style={{display: 'flex', alignContent: 'center'}}>
                <NavAccount/>
            </nav>
        </>
    )
};

export default DefaultHeader;
