import React, { useState } from 'react';
import { store } from '../..';
import { basketAction } from '../../redux/actions';
import './Basket.css';

const Basket = () => {

    const [isDeleted, setIsDeleted] = useState(false);

    let count = 1;
    let total = 0;

    let basket = JSON.parse(localStorage.getItem('basket'));
    let basketArr = basket ? Object.values(basket) : [];

    const handlerDelete = (id) => {
        const obj = {};
        basketArr = basketArr.filter(elem => elem.id !== id);  
        basketArr.forEach(elem => obj[elem.id] = elem);

        localStorage.setItem('basket', JSON.stringify(obj));
        store.dispatch(basketAction(basketArr.length));
        setIsDeleted(!isDeleted);
    }

    const handlerQuantityPlus = (id) => {
        if(basket[id].quantity) {
            basket[id].quantity++;
        } else {
            basket[id].quantity = 2;
        }
        localStorage.setItem('basket', JSON.stringify(basket));
        setIsDeleted(!isDeleted);
    }

    const handlerQuantityMinus = (id) => {
        if(basket[id].quantity && basket[id].quantity > 1) {
            basket[id].quantity--;
        } else {
            delete basket[id];
            store.dispatch(basketAction(Object.keys(basket).length));
        }
        localStorage.setItem('basket', JSON.stringify(basket));  
        setIsDeleted(!isDeleted);
    }

    return ( 
    <div className='user-menu'>
        <h1>Basket Page</h1>
        { basket ? basketArr.map(elem => {
            const price =  +elem.price.replace('$', '').replace(',', '.');
            total += elem.quantity ? price * elem.quantity : price;
                return (
                    <div key={elem.id} className='fav-container'>
                        <div className='fav-img-name'>
                            <p>{count++}.</p>
                            <img src={elem.image} alt={elem.name} />
                            <p>{elem.name} </p>   
                        </div>
                       <div className='fav-price-btn'>
                           <p>{elem.quantity ? (price * elem.quantity).toFixed(2).toString() + '$' : elem.price}</p>
                           <p>Quantity: {elem.quantity || 1}</p>
                           <button className='plus-minus-btn' onClick={() => handlerQuantityPlus(elem.id)}>+</button>
                           <button className='plus-minus-btn' onClick={() => handlerQuantityMinus(elem.id)}>-</button>
                           <button className='watch-btn' onClick={() => handlerDelete(elem.id)}>Delete</button>
                       </div>
                    </div>
                )
            }) : null}
            <p>Total: {total.toFixed(2)}$</p>
    </div> 
    );
}
 
export default Basket;
