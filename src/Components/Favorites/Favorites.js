import React, { useState } from 'react';
import { store } from '../..';
import { addToFavOrBasket } from '../../helpers/eventListeners';
import './Favorites.css';
import { favoritesAction } from '../../redux/actions';
import { keys } from '../../helpers/keyTypes';

const Favorites = () => {

    const [isDeleted, setIsDeleted] = useState(false);

    const favorites = JSON.parse(localStorage.getItem('favorites'));
    let favArr = favorites ? Object.values(favorites) : [];

    let count = 1;

    const handlerDelete = (id) => {
        const obj = {};
        favArr = favArr.filter(elem => elem.id !== id);  
        favArr.map(elem => obj[elem.id] = elem);

        localStorage.setItem('favorites', JSON.stringify(obj));
        store.dispatch(favoritesAction(favArr.length));
        setIsDeleted(!isDeleted);
    }

    return ( 
        <div className='user-menu'>
            <h1>Favorite page</h1>
            { favorites ? favArr.map(elem => {
                return (
                    <div key={elem.id} className='fav-container'>
                        <div className='fav-img-name'>
                            <p>{count++}.</p>
                            <img src={elem.image} alt={elem.name} />
                            <p>{elem.name} </p>   
                        </div>
                       <div className='fav-price-btn'>
                           <p>{elem.price}</p>
                           <button className='buy-btn' onClick={() => addToFavOrBasket(`${elem.category}/${elem.id}`, keys.basket)}>Buy</button>
                           <button className='watch-btn' onClick={() => handlerDelete(elem.id)}>Delete</button>
                       </div>
                    </div>
                )
            }) : null}
        </div> 
    );
}
 
export default Favorites;