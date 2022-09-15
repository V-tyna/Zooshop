import React, { useEffect, useState } from 'react';
import { firebaseUrl } from '../../configs/urls/mainUrlDB';
import './Item.css';
import { addToFavOrBasket } from '../../helpers/eventListeners';
import { fetchDataAndSetState } from '../../API/fetchData';
import { keys } from '../../helpers/keyTypes';

const writePopItemsToLS = (obj) =>
localStorage.setItem('Popular items', JSON.stringify(obj));

const Item = () => {
	const [item, setItem] = useState({});

	const currentLocation = window.location.pathname;
	const url = firebaseUrl + currentLocation + '.json';
	const idItem = `${item.category}/${item.id}`;

	useEffect(() => {
		fetchDataAndSetState(url, setItem);
	}, [url]);

	const countPopularItems = () => {
		const initialObjPopularItems = {};
		const popItemsObj = JSON.parse(localStorage.getItem('Popular items'));

		if (item.id) {
			if (!popItemsObj) {
				initialObjPopularItems[idItem] = 1;
				writePopItemsToLS(initialObjPopularItems);
			} else if (!popItemsObj[idItem]) {
				popItemsObj[idItem] = 1;
				writePopItemsToLS(popItemsObj);
			} else {
				popItemsObj[idItem] += 1;
				writePopItemsToLS(popItemsObj);
			}
		}
	};

	countPopularItems();

	const keysVals = item && Object.entries(item);

	return (
		<div className='item'>
			<h2>{item.name}</h2>
			<button className='fav-btn' onClick={() => addToFavOrBasket(idItem, keys.favorites)}>
				To Fav
			</button>
			<div key={item.id} className='item-container'>
				<img className='item-image' src={item.image} alt={item.name} />
				{keysVals.map((elem) => {
					if (
						elem[0] !== 'image' &&
						elem[0] !== 'category' &&
						elem[0] !== 'id'
					) {
						return (
							<div className='item-info' key={elem[0]}>
								<strong>{elem[0]}: &nbsp; </strong>{' '}
								<p> {elem[1]}</p>
							</div>
						);
					}
					return null;
				})}
			</div>
			<button className='buy-btn' onClick={() => addToFavOrBasket(idItem, keys.basket)}>
				Buy
			</button>
		</div>
	);
};

export default Item;
