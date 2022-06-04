import { baskType } from './actionTypes';

const countFromLS = Object.keys(JSON.parse(localStorage.getItem('Basket')) || {}).length;

const initialState = {
    baskCounter: countFromLS || 0
}

export const baskIconReducer = (state = initialState, action) => {
    if(action.type === baskType) {
        return {
           ...state,
           baskCounter: action.payload
        }
    }

    return state;
}
