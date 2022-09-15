import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';
import { addToFavOrBasket } from '../../helpers/eventListeners';
import { keys } from '../../helpers/keyTypes';

const ItemCard = (props) => {
	const navigate = useNavigate();

	const propId = `${props.data.category}/${props.data.id}`;

	const handlerWatchItem = (id) => {
		navigate(`/${id}`);
	};

	return (
		<div className='item-card'>
			<h3>{props.data.name}</h3>
			<button className='fav-btn' onClick={() => addToFavOrBasket( propId, keys.favorites)}>
				To Fav
			</button>
			<div>
				<img
					className='item-card-image'
					src={props.data.image}
					alt={props.data.name}
				/>
				<p>Price: {props.data.price}</p>
			</div>
			<button className='watch-btn' onClick={() => handlerWatchItem(propId)}>
				Watch more
			</button>
			<button className='buy-btn' onClick={() => addToFavOrBasket(propId, keys.basket)}>
				Buy
			</button>
		</div>
	);
};

export default ItemCard;
