import { fetchDataForOneItem } from '../API/fetchData';
import { store } from '..';
import { baskType, favType } from '../redux/actionTypes';
import { renderPopUpAction } from '../redux/actions';


const keys = {
	favorites: 'Favorites',
	basket: 'Basket',
};

const getObjFromLS = (key) => {
	return JSON.parse(localStorage.getItem(key)) || {};
};

const writeFavsToLS = (obj, key) =>
	localStorage.setItem(key, JSON.stringify(obj));

const dispatchType = (obj, key) => {
	const type = key === keys.favorites ? favType : baskType;

	store.dispatch({ type: type, payload: Object.keys(obj).length });
};

const dispatchPopUp = (key) => {
	store.dispatch(renderPopUpAction(key));
};

const getKeyByType = (key) => {
	return keys[key];
};

export const addToFavOrBasket = async (id, keyType) => {

	const favObj = await fetchDataForOneItem(id);
	const key = getKeyByType(keyType);

	const objFromLS = getObjFromLS(key);

	objFromLS[favObj.id] = favObj;
	writeFavsToLS(objFromLS, key);
	dispatchType(objFromLS, key);

	dispatchPopUp(key);
};
