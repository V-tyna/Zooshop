import React, { useEffect, useState } from 'react';
import './PopularItems.css';
import { bubbleSort } from '../../helpers/sortingFunction';

const firebaseUrl = 'https://zoo-shop-e14b4-default-rtdb.firebaseio.com';

const PopularItems = () => {

    const [hits, setHits] = useState([]);

    const popItemsByDefault = [['dogs/food/wet/0034', 3],['cats/food/dry/0001', 2],['other_animals/0047', 1], ['cats/toilets_fillers/0024', 1]];
    const popItemsFromLS = JSON.parse(localStorage.getItem('Popular items'));
    const arrKeyVal = (popItemsFromLS && Object.entries(popItemsFromLS)) || [];

    let popItems;

    if(arrKeyVal.length < 4) {
        popItems = popItemsByDefault;
    } else {
        popItems = (bubbleSort(arrKeyVal).splice(0, 4));
    }

    useEffect (() => { 
        Promise.all(popItems.map(el => {
            return fetch(firebaseUrl + '/' + el[0] + '.json')
            .then(resp => resp.json())
        }))
        .then(result => setHits(result));
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h2>Sales hits:</h2>
            <div  className='popular-items'>
                {  
                    hits.map(hit => {
                        return (
                                <div key={hit.id} className='hit'>
                                    <p>{hit.name}</p>
                                    <img className='populat-image' src={hit.image} alt={hit.name} />
                                </div>   
                        )
                    })
                }  
            </div>
            
        </div> 
    );
}
 
export default PopularItems;