import { firebaseUrl } from '../urls/mainUrlDB';
import { popUpRender } from './popUpRender';
import { store } from '..';
import { baskType, favType } from '../redux/actionTypes';

const writeFavsToLS = (obj, key) =>
	localStorage.setItem(key, JSON.stringify(obj));

const dispatchType = (obj, key) => {
	const type = key === 'Favorites' ? favType : baskType;

	store.dispatch({ type: type, payload: Object.keys(obj).length });
};

export const addToFavOrBasket = async (e) => {
	const response = await fetch(
		`${firebaseUrl}/${e.target.parentNode.id}.json`
	);
	const favObj = await response.json();

	const key = e.target.className === 'fav-btn' ? 'Favorites' : 'Basket';

	const objFromLS = JSON.parse(localStorage.getItem(key)) || {};

	objFromLS[favObj.id] = favObj;
	writeFavsToLS(objFromLS, key);
	dispatchType(objFromLS, key);

	popUpRender(key);
};
