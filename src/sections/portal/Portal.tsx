import * as React from 'react';
import {NavLink} from "react-router-dom"
import './Portal.scss';

export const Portal: React.FC = () => {
    return (
        <div>
            <header className='portal_header'>


                <div className="search">
                    <h1 className='search_name'>Nimado</h1>
                    <form className='search_felt'>
                        <input style={{height: '2rem', marginLeft: '1rem'}}
                            placeholder=""
                        />
                    </form>
                    <div> </div>

                </div>
            </header>

            <main  className='portal' style={{backgroundColor: '#f7f7f7', height: '100vh'}}>


                <div className='first_column'>

                    <div className='tour'>
                        <h4 className='tour_name'>Relax</h4>
                        <ul className='tour_links'>
                            <li><NavLink to='/entrance'>Entrance</NavLink></li>
                            <li><NavLink to='/cafe'>Cafe</NavLink></li>
                            <li><NavLink to='/aquarium'>Aquarium</NavLink></li>
                            <li><NavLink to='/garden'>Garden</NavLink></li>
                        </ul>
                    </div>

                    <div className='tour_top' style={{borderTop: '1px solid #9370DB'}}>
                        <h4 style={{marginLeft: '1rem'}}>Top 10</h4>

                        <ul>
                            <li><NavLink to='/entrance'>Cafe: New dessert</NavLink></li>
                            <li><NavLink to='/cafe'>Cinema: New trailer of pocahontas</NavLink></li>
                            <li><NavLink to='/aquarium'>News: Reform will be changed.</NavLink></li>
                            <li><NavLink to='/garden'>News: Rain tonight.</NavLink></li>
                        </ul>
                    </div>

                    <div className='tour_reviews' style={{borderTop: '1px solid #9370DB'}}>
                        <h4 style={{marginLeft: '1rem'}}>Reviews</h4>

                        <ul>
                            <li><NavLink to='/entrance'>Cafe: New dessert</NavLink></li>
                            <li><NavLink to='/cafe'>Cinema: New trailer of pocahontas</NavLink></li>
                            <li><NavLink to='/aquarium'>News: Reform will be changed.</NavLink></li>
                            <li><NavLink to='/garden'>News: Rain tonight.</NavLink></li>
                        </ul>
                    </div>


                </div>

                <div className='second_column'>

                    <div className='news'>
                        <h4 style={{marginLeft: '1rem'}}>News</h4>
                        <ul>
                            <li><NavLink to='/entrance'>Politics</NavLink></li>
                            <li><NavLink to='/cafe'>Weather</NavLink></li>
                            <li><NavLink to='/aquarium'>Business</NavLink></li>
                            <li><NavLink to='/garden'>Technology</NavLink></li>
                        </ul>
                    </div>

                    <div className='top'>
                        <h4 style={{marginLeft: '1rem'}}>Top 10</h4>

                        <ul>
                            <li><NavLink to='/entrance'>Cafe: New dessert</NavLink></li>
                            <li><NavLink to='/cafe'>Cinema: New trailer of pocahontas</NavLink></li>
                            <li><NavLink to='/aquarium'>News: Reform will be changed.</NavLink></li>
                            <li><NavLink to='/garden'>News: Rain tonight.</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className='third_column'>

                    <div className='shopping'>
                        <h4 style={{marginLeft: '1rem'}}>Shopping</h4>

                        <ul>
                            <li><NavLink to='/entrance'>Women</NavLink></li>
                            <li><NavLink to='/cafe'>Men</NavLink></li>
                            <li><NavLink to='/aquarium'>Children</NavLink></li>
                            <li><NavLink to='/garden'>Special</NavLink></li>
                        </ul>
                    </div>

                    <div className='preview'>
                        <h4 style={{marginLeft: '1rem'}}>Preview</h4>

                        <ul>
                            <li><NavLink to='/entrance'>New dress</NavLink></li>
                            <li><NavLink to='/cafe'>Idol arrested</NavLink></li>
                            <li><NavLink to='/aquarium'>Expensive dog</NavLink></li>
                            <li><NavLink to='/garden'>Companies will buy more</NavLink></li>
                        </ul>
                    </div>

                    <div className='preview'>
                        <h4 style={{marginLeft: '1rem'}}>Links</h4>
                        <ul>
                            <li><NavLink to='/entrance'>BBC</NavLink></li>
                            <li><NavLink to='/cafe'>CNN</NavLink></li>
                        </ul>
                    </div>
                </div>



                <div className='fourth_column'>

                    <div className='cinema'>
                        <h4 style={{marginLeft: '1rem'}}>Cinema</h4>

                        <ul>
                            <li><NavLink to='/entrance'>Comedy</NavLink></li>
                            <li><NavLink to='/cafe'>Romance</NavLink></li>
                            <li><NavLink to='/aquarium'>Horror</NavLink></li>
                            <li><NavLink to='/garden'>Action</NavLink></li>
                        </ul>
                    </div>

                    <div className='preview'>
                        <h4 style={{marginLeft: '1rem'}}>Preview</h4>

                        <ul>
                            <li><NavLink to='/entrance'>New dress</NavLink></li>
                            <li><NavLink to='/cafe'>Idol arrested</NavLink></li>
                            <li><NavLink to='/aquarium'>Expensive dog</NavLink></li>
                            <li><NavLink to='/garden'>Companies will buy more</NavLink></li>
                        </ul>
                    </div>

                    <div className='preview'>
                        <h4 style={{marginLeft: '1rem'}}>Links</h4>
                        <ul>
                            <li><NavLink to='/entrance'>BBC</NavLink></li>
                            <li><NavLink to='/cafe'>CNN</NavLink></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
};