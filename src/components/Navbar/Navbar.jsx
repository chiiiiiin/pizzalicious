import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const [showMenu, setShowMenu] = useState(false);

  

  const  {getTotalCartAmount} = useContext(StoreContext)

  const location = useLocation();

  // Update menu state based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/menu":
        setMenu("menu");
        break;
      case "/contact":
        setMenu("contact");
        break;
      case "/pizzalicious":
        setMenu("home");
        break;
      default:
        setMenu("home");
    }
  }, [location.pathname]);

  return (
    <div className='navbar'>
      <Link to='/pizzalicious'><img src={assets.logo1} alt="Logo" className='logo' /></Link>
      <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/pizzalicious" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu" onClick={() => setMenu("menu")}>Menu</Link>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <a href='#footer' to="/contact" onClick={() => setMenu("contact")}>Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <ul className="navbar-right-list">
          
          <li className={getTotalCartAmount()===0?"":"dot"}>
            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
          </li>
          <li onClick={()=>setShowLogin(true)}><button>Sign in</button></li>
          <li className='bars' onClick={() => setShowMenu(!showMenu)}><i className="fa-solid fa-bars"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
