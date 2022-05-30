import React from 'react';
import Pagination from './Pagination/Pagination';
import PopularItems from '../PopularItems/PopularItems';
import './Home.css';

const Home = () => {
	return (
		<div className='home-page'>
			<h1>Home page</h1>
			<PopularItems />
			<Pagination />
		</div>
	);
};

export default Home;
