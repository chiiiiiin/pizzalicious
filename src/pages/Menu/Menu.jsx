import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore';
import Footer from '../../components/Footer/Footer'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Menu = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        <Footer/>
    </div>
  );
};

export default Menu;