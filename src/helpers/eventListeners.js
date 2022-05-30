import { firebaseUrl } from '../urls/mainUrlDB';
import { popUpRender } from './popUpRender';

export const addToFavOrBasket = async (e) => {
	const response = await fetch(
		`${firebaseUrl}/${e.target.parentNode.id}.json`
	);
	const data = await response.json();
	let favObj = Object.assign({}, data);

	const key = e.target.className === 'fav-btn' ? 'Favorites' : 'Basket';

	const initialFav = {};
	const favFromLS = JSON.parse(localStorage.getItem(key));

	const writeFavsToLS = (obj) =>
		localStorage.setItem(key, JSON.stringify(obj));

	if (!favFromLS) {
		initialFav[favObj.id] = favObj;
		writeFavsToLS(initialFav);
	} else {
		favFromLS[favObj.id] = favObj;
		writeFavsToLS(favFromLS);
	}

	let phrase;
	if( key === 'Favorites') {
		phrase = 'Item was added to <strong>Favorites</strong>!';
	} else {
		phrase = 'Item was added to the <strong>Basket</strong>!';
	}

	popUpRender(phrase);
};
