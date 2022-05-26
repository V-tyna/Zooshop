import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { auth } from '../..';
import { setActiveClass } from '../../helpers/setActiveClass';

const Header = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('Token');

    const handlerSignOut = () => {
        auth.signOut();
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
                            <button onClick={(handlerSignOut.bind(this))}>Sign out</button> :
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
                        <Link className='user-link' to='/favorites'>Fav</Link>
                        <Link className='user-link' to='/basket'>Basket</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;