import { baskType, favType, popUpType } from './actionTypes';

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

export const renderPopUpAction = (key) => {
    return {
        type: popUpType,
        payload: key
    }
}
