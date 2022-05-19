import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const setActiveLink = ({isActive}) => {
       return isActive ? 'main-header-link active-link' : 'main-header-link ';
    }

    return (
        <div id='header-root'>
            <div id='logo'>Logo</div>
            <div id='header'>
                <div id='link-section'>
                    <nav className="nav">
                        <NavLink className={setActiveLink} to='/'>Home</NavLink>
                        <NavLink className={setActiveLink} to='/cats'>Cats</NavLink>
                        <NavLink className={setActiveLink} to='/dogs'>Dogs</NavLink>
                        <NavLink className={setActiveLink} to='/other_animals'>Other animals</NavLink>
                    </nav>
                    <div className='header-btns'>
                        <button>Sign In</button>
                        <button>Sign Out</button>
                    </div>
                </div>
                <div id='search-sign-section'>
                    <div className='search'>
                        <input type='search' placeholder='Search'/>
                        <button> Search </button>
                    </div>
                    <div className='user-fav-basket'>
                        User Fav Basket
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;