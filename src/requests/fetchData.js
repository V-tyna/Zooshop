import { firebaseUrl } from "../urls/mainUrlDB";

export const fetchDataAndSetState = async (url, funcSetState) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        funcSetState(data);
    } catch (e) {
        throw new Error('Fetch failed: ', e.message);
    }
};

export const fetchData = async (id) => {
	const response = await fetch(
		`${firebaseUrl}/${id}.json`
	);
	return await response.json();
};
