import React, { useEffect, useState } from 'react';
import './MenuNavbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  // Update menu state based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/mobile-app":
        setMenu("mobile-app");
        break;
      case "/menu":
        setMenu("menu");
        break;
      case "/contact":
        setMenu("contact");
        break;
      default:
        setMenu("home");
    }
  }, [location.pathname]);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo1} alt="Logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu" onClick={() => setMenu("menu")}>Menu</Link>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""}>
          <a href='#about' to="/mobile-app" onClick={() => setMenu("mobile-app")}>About</a>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <a href='#footer' to="/contact" onClick={() => setMenu("contact")}>Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <ul className="navbar-right-list">
          <li onClick={()=>setShowLogin(true)}>Login</li>
          <li>Register</li>
          <li className='dot'>
            <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon"/></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
