import React, { useState } from 'react';
import { store } from '../..';
import { basketAction } from '../../redux/actions';
import './Basket.css';

const Basket = () => {

    const [isDeleted, setIsDeleted] = useState(false);

    let count = 1;
    let total = 0;

    let basket = JSON.parse(localStorage.getItem('Basket'));
    let basketArr;
    if(basket) {
        basketArr = Object.values(basket);
    }

    const handlerDelete = (e) => {
        const obj = {};
        basketArr = basketArr.filter(elem => elem.id !== e.target.parentNode.parentNode.id);  
        basketArr.forEach(elem => obj[elem.id] = elem);

        localStorage.setItem('Basket', JSON.stringify(obj));
        store.dispatch(basketAction(basketArr.length));
        setIsDeleted(!isDeleted);
    }

    const handlerQantityPlus = (e) => {
        if(basket[e.target.parentNode.parentNode.id].quantity) {
            basket[e.target.parentNode.parentNode.id].quantity++;
        } else {
            basket[e.target.parentNode.parentNode.id].quantity = 2;
        }
        localStorage.setItem('Basket', JSON.stringify(basket));
        setIsDeleted(!isDeleted);
    }

    const handlerQantityMinus = (e) => {
        if(basket[e.target.parentNode.parentNode.id].quantity && basket[e.target.parentNode.parentNode.id].quantity > 1) {
            basket[e.target.parentNode.parentNode.id].quantity--;
        } else {
            delete basket[e.target.parentNode.parentNode.id];
            store.dispatch(basketAction(Object.keys(basket).length));
        }
        localStorage.setItem('Basket', JSON.stringify(basket));  
        setIsDeleted(!isDeleted);
    }

    return ( 
    <div className='user-menu'>
        <h1>Basket Page</h1>
        { basket ? basketArr.map(elem => {
            const price =  +elem.price.replace('$', '').replace(',', '.');
            total += elem.quantity ? price * elem.quantity : price;
                return (
                    <div id={elem.id} key={elem.id} className='fav-container'>
                        <div className='fav-img-name'>
                            <p>{count++}.</p>
                            <img src={elem.image} alt={elem.name} />
                            <p>{elem.name} </p>   
                        </div>
                       <div id={elem.category + '/' + elem.id} className='fav-price-btn'>
                           <p>{elem.quantity ? (price * elem.quantity).toFixed(2).toString() + '$' : elem.price}</p>
                           <p>Qantity: {elem.quantity || 1}</p>
                           <button className='plus-minus-btn' onClick={handlerQantityPlus}>+</button>
                           <button className='plus-minus-btn' onClick={handlerQantityMinus}>-</button>
                           <button className='watch-btn' onClick={handlerDelete}>Delete</button>
                       </div>
                    </div>
                )
            }) : null}
            <p>Totlal: {total.toFixed(2)}$</p>
    </div> 
    );
}
 
export default Basket;