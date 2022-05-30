import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { auth } from '../..';
import { setActiveClass } from '../../helpers/setActiveClass';
import { popUpRender } from '../../helpers/popUpRender';

const Header = () => {

    const navigate = useNavigate();
    const [countFavs, setCountFavs] = useState(0);
    const [countBask, setCountBask] = useState(0);

    const token = localStorage.getItem('Token');
    const favs = JSON.parse(localStorage.getItem('Favorites'));
    const bask = JSON.parse(localStorage.getItem('Basket'));

    useEffect(() => {
        if(favs) setCountFavs(Object.keys(favs).length);
        if(bask) setCountBask(Object.keys(bask).length);
    }, [favs, bask])
    

    const handlerSignOut = () => {
        auth.signOut();
        popUpRender('<strong>You\'ve successfully sign out!</strong>')
        navigate('/');
        localStorage.clear();
    }

    return (
        <div id='header-root'>
            <div id='logo'>Logo</div>
            <div id='header'>
                <div id='link-section'>
                    <nav className="nav">
                        <NavLink className={setActiveClass} to='/'>Home</NavLink>
                        <NavLink className={setActiveClass} to='/cats'>Cats</NavLink>
                        <NavLink className={setActiveClass} to='/dogs'>Dogs</NavLink>
                        <NavLink className={setActiveClass} to='/other_animals'>Other animals</NavLink>
                    </nav>
                    <div className='header-btns'>
                        {
                            token ?
                            <button onClick={(handlerSignOut)}>Sign out</button> :
                            <div className='sign-links'>
                                <Link id ='signin-link' className='sign' to='/signin'>Sign in</Link>
                                <Link id ='signup-link' className='sign' to='/signup'>Sign up</Link>
                            </div>  
                        }
                    </div>
                </div>
                <div id='search-sign-section'>
                    <div className='search'>
                        <input type='search' placeholder='Search'/>
                        <button> Search </button>
                    </div>
                    <div className='user-fav-basket'>
                        <Link className='user-link' to='/user_profile'>User</Link>
                        <Link className='user-link' to='/favorites'>
                            { countFavs ? <div className='count-fav'>{countFavs}</div> : <div className='count-fav'>0</div> }
                            <div className='text-fav'>Fav</div>
                        </Link>
                        <Link className='user-link-basket' to='/basket'>
                            { countBask ? <div className='count-bask'>{countBask}</div> : <div className='count-bask'>0</div> }
                            <div className='text-bask'>Basket</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;