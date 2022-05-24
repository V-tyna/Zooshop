import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Categories.css';

const Categories = () => {

    const firebaseUrl = 'https://zoo-shop-e14b4-default-rtdb.firebaseio.com';
    const currentLocation = window.location.pathname;
    const url = firebaseUrl + currentLocation + '.json';

    let [dataFetch, setDataFetch] = useState({});

    useEffect(() => {
        const fetchData = async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          setDataFetch(data);
        }

        fetchData(url)
          .catch(e => {throw new Error('Fetch failed: ', e.message)})
    }, [url])

    console.log('Categories: ', dataFetch);
  
  return ( 
      <div className='categories'>
            <div className='categories-page'>
                {Object.values(dataFetch).map(item => {
                return <ItemCard key={item.id} data={item}/>
                })}
            </div>
      </div> );
}
 
export default Categories;