import { baskType, clearBaskStateType } from './actionTypes';

const countFromLS = Object.keys(
	JSON.parse(localStorage.getItem('Basket')) || {}
).length;

const initialState = {
	baskCounter: countFromLS || 0,
};

export const baskIconReducer = (state = initialState, action) => {
	if (action.type === baskType) {
		return {
			...state,
			baskCounter: action.payload,
		};
	}
	if (action.type === clearBaskStateType) {
		return {
			...state,
			baskCounter: 0,
		};
	}

	return state;
};
