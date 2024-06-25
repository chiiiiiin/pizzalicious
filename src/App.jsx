import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Menu from './pages/Menu/Menu'; // Import the Menu component
import Login from './components/Login/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/pizzalicious" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="*" element={<Navigate to="/pizzalicious" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
