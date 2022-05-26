import { firebaseUrl } from '../configs';

export const addToFavOrBasket = async (e) => {
    let favObj;
    
    const response = await fetch(`${firebaseUrl}/${e.target.parentNode.id}.json`);
    const data = await response.json();
    favObj = Object.assign({}, data);

    const key = e.target.className === 'fav-btn' ? 'Favorites' : 'Basket';

    const initialFav = {};
    const favFromLS = JSON.parse(localStorage.getItem(key));
  
    const writeFavsToLS = (obj) => localStorage.setItem(key , JSON.stringify(obj));

    if(!localStorage.getItem(key) ) {
        initialFav[favObj.id] = favObj;
        writeFavsToLS(initialFav);
    } else {
        favFromLS[favObj.id] = favObj;
        writeFavsToLS(favFromLS);
    }
}

