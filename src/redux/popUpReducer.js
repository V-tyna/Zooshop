import { cleanPopUpType, popUpType } from './actionTypes';

const initialState = {
    keyPop: ''
};

export const popUpReducer = (state = initialState, action) => {
    //debugger
	if ((action.type === popUpType)) {
		return {
			...state,
            keyPop: action.payload
		};
	}
    if ((action.type === cleanPopUpType)) {
		return {
			...state,
            keyPop: ''
		};
	}

    return state;
};
