import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { firebaseUrl } from '../../../configs';
import ItemCard from '../../ItemCard/ItemCard';

const Pagination = () => {

    const [page, setPage] = useState(0);
    const [allGoods, setAllGoods] = useState([]);

    const urls = ['/cats/food/dry', '/cats/food/wet', '/cats/toilets_fillers', '/cats/accessories', '/cats/vitamins',
                  '/dogs/food/dry', '/dogs/food/wet', '/dogs/accessories', '/dogs/vitamins',
                  '/other_animals'
                 ]

    useEffect(() => {
        Promise.all(urls.map(url => {
            return fetch(`${firebaseUrl}${url}.json`)
            .then(response => response.json())
            .then(data => Object.values(data))
        }))
        .then(results => setAllGoods(Object.values(results)));
        // eslint-disable-next-line
    }, [])

    const goodsArr = [];
    const recursion = (arr) => {
        arr.forEach(data => {
            if(!Array.isArray(data)) {
            goodsArr.push(data);
        } else {
            return recursion(data);
        }
        }) 
    }

    recursion(allGoods);

    console.log('All goods', allGoods);
    console.log('Array elems', goodsArr);

    return ( 
        <div className='pagination-page'>
             <h2>All goods:</h2>
             <div className='pagination'>
                {goodsArr.map(elem => {
                    return <ItemCard key={elem.id} data={elem} />
                })}
            </div> 
        </div>
    );
}
 
export default Pagination;