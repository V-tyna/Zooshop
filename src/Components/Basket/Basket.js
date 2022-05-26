import React, { useState } from 'react';
import './Basket.css';

const Basket = () => {

    let [quantity, setQantity] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);

    const basket = JSON.parse(localStorage.getItem('Basket'));
    let basketArr;
    if(basket) {
        basketArr = Object.values(basket);
    }

    const handlerDelete = (e) => {
        const obj = {};
        basketArr = basketArr.filter(elem => elem.id !== e.target.parentNode.parentNode.id);  
        basketArr.map(elem => obj[elem.id] = elem);

        localStorage.setItem('Basket', JSON.stringify(obj));
        setIsDeleted(!isDeleted);
    }

    let count = 1;
    let total = 0;

    return ( 
    <div className='user-menu'>
        <h1>Basket Page</h1>
        { basket ? basketArr.map(elem => {
            total += +elem.price.replace('$', '').replace(',', '.');
                return (
                    <div id={elem.id} key={elem.id} className='fav-container'>
                        <div className='fav-img-name'>
                            <p>{count++}.</p>
                            <img src={elem.image} alt={elem.name} />
                            <p>{elem.name} </p>   
                        </div>
                       <div id={elem.category + '/' + elem.id} className='fav-price-btn'>
                           <p>{elem.price}</p>
                           <p>Qantity: </p>
                           <p>{quantity}</p>
                           <button className='plus-minus-btn' onClick={()=> {setQantity(quantity++)}}>+</button>
                           <button className='plus-minus-btn' onClick={()=> {setQantity(quantity--)}}>-</button>
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