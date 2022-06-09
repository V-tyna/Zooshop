import { firebaseUrl } from '../configs/urls/mainUrlDB';
import { urls } from '../configs/urls/allUrlsFromDB';

export const fetchDataAllGoods = async (funcSetState) => {
    try {
        const results = await Promise.all(
            urls.map(async (url) => {
                const response = await fetch(
                    `${firebaseUrl}${url}.json`
                );
                const data = await response.json();
                return Object.values(data);
            })
        );
        funcSetState(results);
    } catch (e) {
        console.error(e.message);
    }
};