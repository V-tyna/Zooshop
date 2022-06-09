import React, { useEffect, useState } from 'react';
import './Pagination.css';
import ItemCard from '../../ItemCard/ItemCard';
import { fetchDataAllGoods } from '../../../API/fetchDataAllGoods';

const Pagination = () => {
	let [currentPage, setCurrentPage] = useState(1);
	let [startFromItem, setStartFromItem] = useState(0);
	let [update, setUpdate] = useState(false);
	const [allGoods, setAllGoods] = useState([]);

	const goodsArr = [];

	useEffect(() => {
		fetchDataAllGoods(setAllGoods);
		// eslint-disable-next-line
	}, []);

	const spreadEachItemIntoArr = (arr) => {
		arr.forEach((data) => {
			if (!Array.isArray(data)) {
				goodsArr.push(data);
			} else {
				return spreadEachItemIntoArr(data);
			}
		});
	};

	spreadEachItemIntoArr(allGoods);

	const LIMIT_ITEMS_PER_PAGE = 8;
	const countPages = Math.ceil(goodsArr.length / LIMIT_ITEMS_PER_PAGE);
	const startFromItemTheLastPage =
		goodsArr.length -
		(goodsArr.length % Math.floor(goodsArr.length / LIMIT_ITEMS_PER_PAGE));

	const itemsForPage = goodsArr.slice(
		startFromItem,
		startFromItem + LIMIT_ITEMS_PER_PAGE
	);

	const handlerNextPage = () => {
		if (currentPage < countPages) {
			setCurrentPage(++currentPage);
			setStartFromItem(startFromItem + LIMIT_ITEMS_PER_PAGE);
		} else {
			setStartFromItem(startFromItemTheLastPage);
		}
		setUpdate(!update);
	};

	const handlerPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(--currentPage);
			setStartFromItem(startFromItem - LIMIT_ITEMS_PER_PAGE);
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
					Page: <strong>{currentPage}</strong> from{' '}
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
