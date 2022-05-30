import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Cats from './Components/Cats/Cats';
import Dogs from './Components/Dogs/Dogs';
import OtherAnimals from './Components/OtherAnimals/OtherAnimals';
import Item from './Components/Item/Item';
import Favorites from './Components/Favorites/Favorites';
import Basket from './Components/Basket/Basket';
import UserProfile from './Components/UserProfile/UserProfile';
import SignIn from './Components/SignInUp/SignIn/SignIn';
import SignUp from './Components/SignInUp/SignUp/SignUp';
import Categories from './Components/Categories/Categories';
import Food from './Components/Categories/Food/Food';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';

function App() {
    return (
        <div>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cats' element={<Cats />} />
                <Route path='/cats/food' element={<Food />} />
                <Route path='/cats/food/:category' element={<Categories />} />
                <Route path='/cats/:category' element={<Categories />} />
                <Route path='/dogs' element={<Dogs />} />
                <Route path='/dogs/food' element={<Food />} />
                <Route path='/dogs/food/:category' element={<Categories />} />
                <Route path='/dogs/:category' element={<Categories />} />
                <Route path='/other_animals' element={<OtherAnimals />} />
                <Route path='/other_animals/:id' element={<Item />} />
                <Route path='/:animals/:category/:id' element={<Item />} />
                <Route path='/:animals/:category/:specific/:id' element={<Item />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='/favorites' element={<PrivateRoute component={<Favorites />} />} />
                <Route path='/basket' element={<PrivateRoute component={<Basket />} />} />
                <Route path='/user_profile' element={<PrivateRoute component={<UserProfile />} />} />

                <Route path='*' element={<h1 style={{color: 'red', textAlign: 'center'}}>404 Page not found</h1>} />
            </Routes>
        </div> 
    );
}

export default App;
