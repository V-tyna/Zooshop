import React from 'react';
import './PopUp.css';

const phrases = {
	'Favorites': 'Item was added to Favorites!',
	'Basket': 'Item was added to the Basket!',
	'SignOut': 'You\'ve successfully sign out!',
	'SignIn': 'You\'ve successfully sign in!',
	'Registered': 'You\'ve successfully registered!',
};

const PopUp = (props) => {
    const phrase = phrases[props.keyPop];
    return ( 
        <div className='pop-up'>
            <p><strong>{phrase}</strong></p>
        </div>
     );
}
 
export default PopUp;