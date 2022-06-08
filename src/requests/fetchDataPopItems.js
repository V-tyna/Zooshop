import { firebaseUrl } from "../urls/mainUrlDB";

export const fetchDataPopItems = async (arr, funcSetState) => {
    try {
        const results = await Promise.all(
            arr.map(async (el) => {
                const response = await fetch(
                    firebaseUrl + '/' + el[0] + '.json'
                );
                return await response.json();
            })
        );
        funcSetState(results);
    } catch (e) {
        console.error(e.message);
    }
};