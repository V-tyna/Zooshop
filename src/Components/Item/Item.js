import React, { useEffect, useState } from 'react';
import './Item.css';

const Item = () => {

    const firebaseUrl = 'https://zoo-shop-e14b4-default-rtdb.firebaseio.com';
    const currentLocation = window.location.pathname;
    const url = firebaseUrl + currentLocation + '.json';

    const [item, setItem] = useState({});

    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            setItem(data);
          }

          fetchData(url)
            .catch(e => {throw new Error('Fetch failed: ', e.message)})
    }, [url]);

    console.log('Specific Item: ', item);

    return ( 
        <div>
            <h1>Item page</h1>
                <div key={item.id}>
                    <img className="item-image" src={item.image} alt={item.name}/>
                    <p>{item.name}</p>
                </div>
        </div>
    );
}
 
export default Item;