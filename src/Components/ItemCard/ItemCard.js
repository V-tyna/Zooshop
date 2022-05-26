import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';
import { addToFavOrBasket } from '../../helpers/eventListeners';

const ItemCard = (props) => {

    const navigate = useNavigate();

    if(props.length) {
        console.log(Object.keys(props.data));
    }

    const handlerWatchItem = (e) => {
        navigate(`/${e.target.parentNode.id}`)
    }

    return ( 
        <div className='item-card' id={props.data.category + '/' + props.data.id} >
            <h3>{props.data.name}</h3>
            <button className='fav-btn' onClick={addToFavOrBasket}>To Fav</button>
            <img className='item-card-image' src={props.data.image} alt={props.data.name}/>
            <button className='watch-btn' onClick={handlerWatchItem.bind(this)}>Watch more</button>
            <button className='buy-btn' onClick={addToFavOrBasket}>Buy</button>
        </div> 
     );
}
 
export default ItemCard;