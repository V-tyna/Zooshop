import React, { Suspense} from 'react';
import PopularItems from '../PopularItems/PopularItems';
import './Home.css';

const Pagination = React.lazy(() => import ('./Pagination/Pagination')) ;

const Home = () => {
	return (
		<div className='home-page'>
			<h1>Home page</h1>
			<PopularItems />
			<Suspense fallback={<div>Loading...</div>}>
				<Pagination />
			</Suspense>
		</div>
	);
};

export default Home;
