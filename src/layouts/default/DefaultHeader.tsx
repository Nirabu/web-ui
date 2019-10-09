import * as React from 'react';
import TitleBig from "../../components/titles/TitleBig";
import Circle from "../../components/shapes/Circle";
import SearchBox from "../../components/inputs/SearchBox";
import {Account} from "../../components/bars/Account";

interface DefaultHeader {
    title: string;
}

const DefaultHeader: React.FC<DefaultHeader> = (props) => {
    return (
        <>
            <header className='header-top'>
                <TitleBig title={props.title}/>
            </header>

            <article className='header-search'>
                <SearchBox/>
            </article>

            <nav className='header-account'>
                <Account/>
            </nav>
        </>
    )
};

export default DefaultHeader;