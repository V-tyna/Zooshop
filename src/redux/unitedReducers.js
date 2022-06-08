import { combineReducers } from 'redux';
import { favIconReducer } from './favIconReducer';
import { baskIconReducer } from './baskIconReducer';
import { popUpReducer } from './popUpReducer';

export default combineReducers({
    favIconReducer,
    baskIconReducer,
    popUpReducer
})