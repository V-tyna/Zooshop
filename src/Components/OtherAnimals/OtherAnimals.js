import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './OtherAnimals.css';

const urlOA = 'https://zoo-shop-e14b4-default-rtdb.firebaseio.com/Other_Animals.json';

const OtherAnimals = () => {
    let [obj, setData] = useState({});

      useEffect(() => {
          const fetchData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
          }

          fetchData(urlOA)
            .catch(e => {throw new Error('Fetch failed: ', e.message)})
      }, [])
    
    return ( 
        <div>
            <h1>Other Animals</h1>
            <div  className="other-animal-page">
                {Object.values(obj).map(item => {
                return <ItemCard key={item.id} data={item}/>
                })}
            </div>
        </div> );
}

export default OtherAnimals;