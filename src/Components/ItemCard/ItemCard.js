import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = (props) => {

    const navigate = useNavigate();

    if(props.length) {
        console.log(Object.keys(props.data));
    }

    const handlerWatchItem = (e) => {
        const itemId = e.target.id;
        navigate(`/${props.data.category}/${itemId}`)
    }

    return ( 
        <div className="item-card">
            <h3>{props.data.name}</h3>
            <img className="item-card-image" src={props.data.image} alt={props.data.name}/>
            <button id={props.data.id} onClick={handlerWatchItem.bind(this)}>Watch more</button>
        </div> 
     );
}
 
export default ItemCard;