import { fetchData } from '../requests/fetchData';
import { store } from '..';
import { baskType, favType } from '../redux/actionTypes';
import { renderPopUpAction } from '../redux/actions';

const keysForLS = {
	Favorites: 'Favorites',
	Basket: 'Basket',
};

const getObjFromLS = (key) => {
	return JSON.parse(localStorage.getItem(key)) || {};
};

const writeFavsToLS = (obj, key) =>
	localStorage.setItem(key, JSON.stringify(obj));

const dispatchType = (obj, key) => {
	const type = key === 'Favorites' ? favType : baskType;

	store.dispatch({ type: type, payload: Object.keys(obj).length });
};

const dispatchPopUp = (key) => {
	store.dispatch(renderPopUpAction(key));
};

const getKeyByType = (key) => {
	return keysForLS[key];
};

export const addToFavOrBasket = async (id, keyType) => {
	const favObj = await fetchData(id);
	const key = getKeyByType(keyType);

	const objFromLS = getObjFromLS(key);

	objFromLS[favObj.id] = favObj;
	writeFavsToLS(objFromLS, key);
	dispatchType(objFromLS, key);

	dispatchPopUp(key);
};
