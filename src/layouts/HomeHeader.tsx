import * as React from "react";
import {NavAccount, NavTour} from "../components/Navigations";
import {SearchBox} from "../components/Search";
import {TitleMedium} from "../components/Titles";
import {Temperature} from "../components/Weather";

const HomeHeader: React.FC = () => {
    return (
        <>
            <article className='account'>
                <NavAccount />
            </article>

            <section className='search'>
                <article className='search__box'>
                    <SearchBox />
                </article>

                <article className='search__title'>
                    <TitleMedium title='Nitji'/>
                </article>
            </section>

            <article className='weather'>
                <Temperature degrees={30} humid={2}/>
            </article>

            <section className='services'>
                <NavTour />
            </section>
        </>
    )
};

export default HomeHeader;
