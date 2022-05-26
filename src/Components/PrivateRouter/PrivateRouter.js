import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivateRouter.css';

const PrivateRoute = (props) =>  {
    const token = localStorage.getItem('Token')
    const navigation = useNavigate()
    return ( 
        <div className='private-router'>
            {token ? props.component : <div> <h3>Please Sign in:</h3><button className='router-btn' onClick={() => navigation('/signin')}>Sign in</button> </div> }
        </div> 
    );
}

  export default PrivateRoute;