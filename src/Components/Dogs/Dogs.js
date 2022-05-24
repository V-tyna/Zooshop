import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dogs.css';
import { setActiveClass } from '../../helpers/setActiveClass';

const Dogs = () => {
    return ( 
        <div className='dogs-page'>
            <nav className='nav'>
                <NavLink className={setActiveClass} to='/dogs/food'><h3>Food</h3>
                <img alt='food' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Dogs%2FDry%2F0028.webp?alt=media&token=38560c4d-a5ae-41fe-a43c-150b0b8f0bb1'/></NavLink>
                <NavLink className={setActiveClass} to='/dogs/vitamins'><h3>Vitamins</h3>
                <img alt='vitamins' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Dogs%2FVitamins%2F0038.webp?alt=media&token=a03ee847-0bb6-47c2-ad04-7e4da336e096'/></NavLink>
                <NavLink className={setActiveClass} to='/dogs/accessories'><h3>Accessories</h3>
                <img alt='accessories' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Dogs%2FAccessories%2F0042.webp?alt=media&token=28bcc806-80c9-474a-8015-e224070b8ecc'/></NavLink>
            </nav>    
        </div> 
   );
}

export default Dogs;