import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import { Context } from './context/Context';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Navbar />

      <div className='mb-4 md:w-[80%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/category' element={<Category />} />

        </Routes>
      </div>
    </>

  );
}

export default App;
