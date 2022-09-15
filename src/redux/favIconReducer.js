import { clearFavStateType, favType } from './actionTypes';

const countFromLS = Object.keys(JSON.parse(localStorage.getItem('favorites')) || {}).length;

const initialState = {
    favCounter: countFromLS || 0
};

export const favIconReducer = (state = initialState, action) => {
    if(action.type === favType) {
        return {
           ...state,
           favCounter: action.payload
        }
    }
    if(action.type === clearFavStateType) {
        return {
            ...state,
            favCounter: 0
        }
    }

    return state;
}
