import { fetchDataForOneItem } from '../API/fetchData';
import { store } from '..';
import { baskType, favType } from '../redux/actionTypes';
import { renderPopUpAction } from '../redux/actions';
import { keys } from './keyTypes';


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

export const addToFavOrBasket = async (id, keyType) => {

	const favObj = await fetchDataForOneItem(id);

	const objFromLS = getObjFromLS(keyType);

	objFromLS[favObj.id] = favObj;
	writeFavsToLS(objFromLS, keyType);
	dispatchType(objFromLS, keyType);

	dispatchPopUp(keyType);
};
