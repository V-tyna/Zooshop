import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Cats from './Components/Cats/Cats';
import Dogs from './Components/Dogs/Dogs';
import OtherAnimals from './Components/OtherAnimals/OtherAnimals';

function App() {
  return (
    <div>
      <Header />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/dogs' element={<Dogs />} />
          <Route path='/other_animals' element={<OtherAnimals />} />
      </Routes>
    </div> 
  );
}

export default App;
