import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Categories.css';
import { firebaseUrl } from '../../urls/mainUrlDB';
import { fetchDataAndSetState } from '../../requests/fetchData';

const Categories = () => {
	const currentLocation = window.location.pathname;
	const url = firebaseUrl + currentLocation + '.json';

	let [dataFetch, setDataFetch] = useState({});

	useEffect(() => {
		fetchDataAndSetState(url, setDataFetch);
	}, [url]);

	return (
		<div className='categories'>
			<div className='categories-page'>
				{Object.values(dataFetch).map((item) => {
					return <ItemCard key={item.id} data={item} />;
				})}
			</div>
		</div>
	);
};

export default Categories;
