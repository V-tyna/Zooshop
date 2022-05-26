import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../..';
import './PrivateRouter.css';

const PrivateRoute = (props) =>  {
    const navigation = useNavigate()
    return ( 
        <div className='private-router'>
            {auth.currentUser ? props.component : <div> <h3>Please Sign in:</h3><button onClick={() => navigation('/signin')}>Sign in</button> </div> }
        </div> 
    );
}

  export default PrivateRoute;