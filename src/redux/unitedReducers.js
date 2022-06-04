import { combineReducers } from 'redux';
import { favIconReducer } from './favIconReducer';
import { baskIconReducer } from './baskIconReducer';

export default combineReducers({
    favIconReducer,
    baskIconReducer
})