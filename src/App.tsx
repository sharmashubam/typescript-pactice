import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/Product';
import Home from './pages/Home';
import Store from './pages/Store';
// import { Context } from './context/Context';
import Category from './pages/Category';
import { apiData, Context } from './context/Context';


function App() {

  const [detail,setDetail]= useState<apiData |null>(null)
  return (
    <>
    <Context.Provider value={{detail,setDetail}}>


    <Navbar />
      
      <div className='mb-4 md:w-[90%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/category' element={<Category />} />

        </Routes>
      </div>


    </Context.Provider>
      
    </>

  );
}

export default App;
