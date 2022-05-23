import React, { useEffect, useState } from 'react';
import './OtherAnimals.css';

const OtherAnimals = () => {
    let [obj, setData] = useState({});


    
      useEffect(() => {
            fetch('https://zoo-shop-e14b4-default-rtdb.firebaseio.com/Other_Animals.json')
                .then(data => data.json())
                .then(dataResp => {
                    setData(dataResp)
                }) 
      }, [])
      console.log("Fetch: ", obj);
    
        return ( 
        <div>
            <h1>OtherAnimals page</h1>
            <p>{}</p>
        </div> );
    
}

export default OtherAnimals;