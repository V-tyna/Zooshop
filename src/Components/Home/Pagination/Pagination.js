import React, { useEffect, useState } from 'react';
import './Pagination.css';
import ItemCard from '../../ItemCard/ItemCard';
import { firebaseUrl } from '../../../urls/mainUrlDB';
import { urls } from '../../../urls/allUrlsFromDB';

let pageNext = 1;

const Pagination = () => {
	let [page, setPage] = useState(1);
	let [startFromItem, setStartFromItem] = useState(0);
	let [update, setUpdate] = useState(false);
	const [allGoods, setAllGoods] = useState([]);
	
	const goodsArr = [];

	useEffect(() => {
		Promise.all(
			urls.map(async (url) => {
				const response = await fetch(`${firebaseUrl}${url}.json`);
				const data =  await response.json();
				return Object.values(data);
			})
		).then((results) => setAllGoods(results))
		.catch(e => console.error(e.message))
		// eslint-disable-next-line
	}, []);

	const getAndPushEachItemToArr = (arr) => {
		arr.forEach((data) => {
			if (!Array.isArray(data)) {
				goodsArr.push(data);
			} else {
				return getAndPushEachItemToArr(data);
			}
		});
	};

	getAndPushEachItemToArr(allGoods);

	const limitItemsPerOnePage = 8;
	const countPages = Math.ceil(goodsArr.length / limitItemsPerOnePage);
	const startFromItemTheLastPage =
		goodsArr.length -
		(goodsArr.length % Math.floor(goodsArr.length / limitItemsPerOnePage));

	const itemsForPage = goodsArr.slice(
		startFromItem,
		startFromItem + limitItemsPerOnePage
	);

	const handlerNextPage = () => {
		if (page < countPages) {
			setPage(++pageNext);
			setStartFromItem(startFromItem + limitItemsPerOnePage);
		} else {
			setStartFromItem(startFromItemTheLastPage);
		}
		setUpdate(!update);
	};

	const handlerPrevPage = () => {
		if (page > 1) {
			setPage(--pageNext);
			setStartFromItem(startFromItem - limitItemsPerOnePage);
		} else {
			setStartFromItem(0);
		}
		setUpdate(!update);
	};

	return (
		<div className='pagination-page'>
			<h2>All goods:</h2>
			<div className='pagination-panel'>
				<button className='prev-next' onClick={handlerPrevPage}>
					{' '}
					prev &lt;
				</button>
				<p>
					{' '}
					Page: <strong>{page}</strong> from{' '}
					<strong>{countPages}</strong>
				</p>
				<button className='prev-next' onClick={handlerNextPage}>
					&gt; next
				</button>
			</div>
			<div className='pagination'>
				{itemsForPage.map((elem) => {
					return <ItemCard key={elem.id} data={elem} />;
				})}
			</div>
		</div>
	);
};

export default Pagination;
