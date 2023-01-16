import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, ScrollRestoration, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/Product';
import Home from './pages/Home';
import Store from './pages/Store';
// import { Context } from './context/Context';
import Category from './pages/Category';
import { apiData, Context } from './context/Context';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Footer from './components/Footer';
import CheckOut from './pages/CheckOut';


function App() {
  const [cart, setCart] = useState<apiData[] | null>([])

  const [detail, setDetail] = useState<apiData | null>(null)
  return (
    <>
      <Context.Provider value={{ cart, setCart, setDetail }}>
        <ShoppingCartProvider>

          <Navbar />

          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<About />} />
              <Route path='/store' element={<Store />} />
              <Route path='/category' element={<Category />} />
              <Route path ='/checkout' element={<CheckOut />} />

            </Routes>
          </div>
          <Footer />
        </ShoppingCartProvider>

      </Context.Provider>

    </>

  );
}

export default App;
