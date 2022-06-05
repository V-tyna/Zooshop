import { firebaseUrl } from '../urls/mainUrlDB';
import { popUpRender } from './popUpRender';
import { store } from '..';
import { baskType, favType } from '../redux/actionTypes';

const writeFavsToLS = (obj, key) =>
localStorage.setItem(key, JSON.stringify(obj));

const dispatchType = (obj, key) => {
	let type;
if(key === 'Favorites') {
	type = favType;
}
if(key === 'Basket') {
	type = baskType;
}
store.dispatch({type: type, payload: Object.keys(obj).length})
}	

export const addToFavOrBasket = async (e) => {
	const response = await fetch(
		`${firebaseUrl}/${e.target.parentNode.id}.json`
	);
	const data = await response.json();
	let favObj = Object.assign({}, data);

	const key = e.target.className === 'fav-btn' ? 'Favorites' : 'Basket';

	const initialFav = {};
	const objFromLS = JSON.parse(localStorage.getItem(key));

	if (!objFromLS) {
		initialFav[favObj.id] = favObj;
		writeFavsToLS(initialFav, key);
		dispatchType(initialFav, key)
	} else {
		objFromLS[favObj.id] = favObj;
		writeFavsToLS(objFromLS, key);
		dispatchType(objFromLS, key);
	}

	let phrase;
	if( key === 'Favorites') {
		phrase = 'Item was added to <strong>Favorites</strong>!';
	} else {
		phrase = 'Item was added to the <strong>Basket</strong>!';
	}

	popUpRender(phrase);
};
