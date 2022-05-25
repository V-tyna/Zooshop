import React, { useEffect, useState } from 'react';
import './PopularItems.css';
import { bubbleSort } from '../../helpers/sortingFunction';

const firebaseUrl = 'https://zoo-shop-e14b4-default-rtdb.firebaseio.com';

const PopularItems = () => {

    const [hits, setHits] = useState([]);

    const popItemsByDefault = {'dogs/food/wet/0034': 3,'cats/food/dry/0001': 2,'other_animals/0047': 1, 'cats/toilets_fillers/0024': 1};
    const popItemsFromLS = JSON.parse(localStorage.getItem('Popular items'));
    const arrKeyVal = Object.entries(popItemsFromLS);

    let popItems;

    if(arrKeyVal.length < 4) {
        popItems = popItemsByDefault;
    } else {
        const sortedPopItemsFromLS = (bubbleSort(arrKeyVal).splice(0, 4));
        popItems = sortedPopItemsFromLS;
    }

    useEffect (() => { 
        let currentUrls;
        if(!Array.isArray(popItems)) {
            currentUrls = Object.keys(popItems);
        } else {
            currentUrls = popItems.map(elem => elem[0]);
        }
        
        Promise.all(currentUrls.map(url => {
            return fetch(firebaseUrl + '/' + url + '.json')
            .then(resp => resp.json())
        }))
        .then(result => setHits(result));
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h2>Sales hits:</h2>
            {  
                hits.map(hit => {
                    return (
                        <div key={hit.id} className='hit'>{hit.name}</div>
                    )
                })
            } 
        </div> 
    );
}
 
export default PopularItems;