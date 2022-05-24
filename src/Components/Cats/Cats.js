import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cats.css';
import { setActiveClass } from '../../helpers/setActiveClass';

const Cats = () => {

    return ( 
        <div className='cats-page'>
            <nav className='nav'>
                <NavLink className={setActiveClass} to='/cats/food'> <h3>Food</h3>
                <img alt='food' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Cats%2FDry%2F0001.webp?alt=media&token=642b4d3b-18eb-4600-b8a5-a99c823d6029'/></NavLink>
                <NavLink className={setActiveClass} to='/cats/vitamins'><h3>Vitamins</h3>
                <img alt='vitamins' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Cats%2FVitamins%2F0013.webp?alt=media&token=81da3cdc-1727-4ebd-8b2a-b24fab55211f'/></NavLink>
                <NavLink className={setActiveClass} to='/cats/toilets_fillers'><h3>Toilets and Fillers</h3>
                <img alt='toilets_fillers' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Cats%2FToilets%20%26%20Fillers%2F0023.webp?alt=media&token=8e3dfd74-0ed8-45c0-b001-5263f60d9a86'/></NavLink>
                <NavLink className={setActiveClass} to='/cats/accessories'><h3>Accessories</h3>
                <img alt='accessories' src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/Cats%2FAccessoires%2F0021.webp?alt=media&token=bd31a6aa-5df3-4daf-b7d4-ecd0aa986abe'/></NavLink>
            </nav>    
        </div> 
    );
}

export default Cats;