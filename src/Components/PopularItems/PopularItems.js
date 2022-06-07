import React, { useEffect, useState } from 'react';
import './PopularItems.css';
import { bubbleSort } from '../../helpers/sortingFunction';
import ItemCard from '../ItemCard/ItemCard';
import { firebaseUrl } from '../../urls/mainUrlDB';
import { popItemsByDefault } from '../../urls/popularItemsByDefault';

const PopularItems = () => {
	const [hits, setHits] = useState([]);

	const popItemsFromLS = JSON.parse(localStorage.getItem('Popular items'));
	const arrKeyVal = (popItemsFromLS && Object.entries(popItemsFromLS)) || [];

	let popItems;

	if (arrKeyVal.length < 4) {
		popItems = popItemsByDefault;
	} else {
		popItems = bubbleSort(arrKeyVal).splice(0, 4);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const results = await Promise.all(
					popItems.map(async (el) => {
						const response = await fetch(
							firebaseUrl + '/' + el[0] + '.json'
						);
						return await response.json();
					})
				);
				setHits(results);
			} catch (e) {
				console.error(e.message);
			}
		};
		fetchData();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='pop-items-container'>
			<h2>Sales hits:</h2>
			<div className='popular-items'>
				{hits.map((hit) => {
					return <ItemCard key={hit.id} data={hit} />;
				})}
			</div>
		</div>
	);
};

export default PopularItems;
