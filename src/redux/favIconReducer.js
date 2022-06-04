import { delType, favType } from './actionTypes';

const countFromLS = Object.keys(JSON.parse(localStorage.getItem('Favorites')) || {}).length;

const initialState = {
    favCounter: countFromLS || 0
}

export const favIconReducer = (state = initialState, action) => {
    if(action.type === favType) {
        return {
           ...state,
           favCounter: action.payload
        }
    }
    if(action.type === delType) {
        return {
            ...state,
            favCounter: action.payload
         }
    }

    return state;
}
