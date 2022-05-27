import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { firebaseUrl } from '../../../configs';
import ItemCard from '../../ItemCard/ItemCard';

let pageNext = 1;

const Pagination = () => {

    let [page, setPage] = useState(1);
    let [startFromItem, setStartFromItem] = useState(0);
    let [update, setUpdate] = useState(false);

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

    const limitItemsPerOnePage = 8;
    const countPages = Math.ceil(goodsArr.length / limitItemsPerOnePage);
    const startFromItemTheLastPage = goodsArr.length - (goodsArr.length % Math.floor(goodsArr.length / limitItemsPerOnePage)); 

    const itemsForPage = goodsArr.slice(startFromItem, startFromItem + limitItemsPerOnePage);

    const handlerNextPage = () => {
        if(page < countPages) { 
            setPage(++pageNext);
            setStartFromItem(startFromItem + limitItemsPerOnePage);
        } else {
            setStartFromItem(startFromItemTheLastPage)
        }
        setUpdate(!update); 
    }
 
    const handlerPrevPage = () => {
        if(page > 1) { 
            setPage(--pageNext);
            setStartFromItem(startFromItem - limitItemsPerOnePage);
        } else {
            setStartFromItem(0)
        }
        setUpdate(!update); 
    }

    return ( 
        <div className='pagination-page'>
             <h2>All goods:</h2>
             <div className='pagination-panel'>
                 <button className='prev-next' onClick={handlerPrevPage}> prev &lt;</button>
                    <p> Page: <strong>{page}</strong> from <strong>{countPages}</strong></p>
                 <button className='prev-next' onClick={handlerNextPage}>&gt; next</button>
             </div>
             <div className='pagination'>
                {itemsForPage.map(elem => {
                    return <ItemCard key={elem.id} data={elem} />
                })}
            </div> 
        </div>
    );
}
 
export default Pagination;