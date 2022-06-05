import { baskType, favType } from './actionTypes';

export const favoritesAction = (num) => {
    return {
        type: favType,
        payload: num
    }
}

export const basketAction = (num) => {
    return {
        type: baskType,
        payload: num
    }
}

export const clearStateAction = (type) => {
    return {
        type: type
    }
}