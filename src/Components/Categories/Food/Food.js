import React from 'react';
import { NavLink } from 'react-router-dom';
import './Food.css';
import { setActiveClass } from '../../../helpers/setActiveClass';

const Food = () => {

    const path = window.location.pathname;

    return ( 
        <div className='food-page'>
            <nav className='nav'>
                <NavLink className={setActiveClass} to={`${path}/dry`}><h3>Dry</h3>
                <img alt='food' 
                src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/dry.webp?alt=media&token=366a6b1a-9727-4be8-909a-4c6ef3502f1a'/>
                </NavLink>
                <NavLink className={setActiveClass} to={`${path}/wet`}><h3>Wet</h3>
                <img alt='vitamins' 
                src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/wet.jpeg?alt=media&token=a3923999-3305-4f11-b33a-1b5bfc13cc14'/>
                </NavLink>
            </nav>    
        </div> 
     );
}
 
export default Food;