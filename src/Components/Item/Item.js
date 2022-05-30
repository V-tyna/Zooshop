import React, { useEffect, useState } from 'react';
import { firebaseUrl } from '../../urls/mainUrlDB';
import './Item.css';
import { addToFavOrBasket } from '../../helpers/eventListeners';

const Item = () => {
	const [item, setItem] = useState({});

	const currentLocation = window.location.pathname;
	const url = firebaseUrl + currentLocation + '.json';

	useEffect(() => {
		const fetchData = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			setItem(data);
		};

		fetchData(url).catch((e) => {
			throw new Error('Fetch failed: ', e.message);
		});
	}, [url]);

	const countPopularItems = () => {
		const initialObjPopularItems = {};
		const popItemsObj = JSON.parse(localStorage.getItem('Popular items'));
		const writePopItemsToLS = (obj) =>
			localStorage.setItem('Popular items', JSON.stringify(obj));

		if (item.id) {
			if (!popItemsObj) {
				initialObjPopularItems[item.category + '/' + item.id] = 1;
				writePopItemsToLS(initialObjPopularItems);
			} else if (!popItemsObj[item.category + '/' + item.id]) {
				popItemsObj[item.category + '/' + item.id] = 1;
				writePopItemsToLS(popItemsObj);
			} else {
				popItemsObj[item.category + '/' + item.id] += 1;
				writePopItemsToLS(popItemsObj);
			}
		}
	};

	countPopularItems();

	const keysVals = item && Object.entries(item);

	return (
		<div id={item.category + '/' + item.id} className='item'>
			<h2>{item.name}</h2>
			<button className='fav-btn' onClick={addToFavOrBasket}>
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
			<button className='buy-btn' onClick={addToFavOrBasket}>
				Buy
			</button>
		</div>
	);
};

export default Item;
