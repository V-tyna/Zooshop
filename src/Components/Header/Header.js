import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { auth } from '../..';
import { setActiveClass } from '../../helpers/setActiveClass';
import { popUpRender } from '../../helpers/popUpRender';
import { connect } from 'react-redux';
import { clearStateAction } from '../../redux/actions';
import { clearBaskStateType, clearFavStateType } from '../../redux/actionTypes';

const Header = (props) => {
    const navigate = useNavigate();

    const token = localStorage.getItem('Token');

    const handlerSignOut = () => {
        auth.signOut();
        popUpRender('<strong>You\'ve successfully sign out!</strong>');
        navigate('/');
        localStorage.clear();
        props.clearFavCount();
        props.clearBaskCount();
    }

    return (
        <div id='header-root'>
            <Link to='/' id='logo'>
            <p>Home</p>
                <img  
                    className='logo-image'
                    src='https://firebasestorage.googleapis.com/v0/b/zoo-shop-e14b4.appspot.com/o/logo_free-file.png?alt=media&token=b1d730a5-3b87-4b51-8bde-06ed5a5efeb0'
                    alt='Logo pet pow' 
                />
            </Link>
            <div id='header'>
                <div id='link-section'>
                    <nav className='nav'>
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
                            { props.favCount ? <div className='count-fav'>{props.favCount}</div> : <div className='count-fav'>0</div> }
                            <div className='text-fav'>Fav</div>
                        </Link>
                        <Link className='user-link-basket' to='/basket'>
                            { props.baskCount ? <div className='count-bask'>{props.baskCount}</div> : <div className='count-bask'>0</div> }
                            <div className='text-bask'>Basket</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const mapStateProps = (state) => {
    return {
        favCount: state.favIconReducer.favCounter,
        baskCount: state.baskIconReducer.baskCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearFavCount: () => dispatch(clearStateAction(clearFavStateType)),
        clearBaskCount: () => dispatch(clearStateAction(clearBaskStateType))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Header);
