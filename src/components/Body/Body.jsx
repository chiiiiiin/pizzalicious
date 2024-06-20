import React from 'react'
import './Body.css'
import { assets } from '../../assets/assets'
import Swal from 'sweetalert2'
import { Link, useLocation } from 'react-router-dom';



const Body = () => {

const handleBooking = () =>{
    Swal.fire({
        title: 'Success!',
        text: 'Successfully Booked',
        icon: 'success',
        confirmButtonText: 'OK',
    })
};

  return (
    <div className='body' id='about'>
        <div className="book">
            <img src={assets.crown} alt="" className='book-img' />
            <form action="book" className='form'>
                <div className="flex-form">
                    <label htmlFor="date"><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;&nbsp;Date</label>
                    <input type="date" id='date' required/>
                </div>
                <div className="flex-form">
                    <label htmlFor="time"><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;&nbsp;Time</label>
                    <input type="time" id='time' required/>
                </div>
                <div className="flex-form">
                    <label htmlFor="guest"><i class="fa-regular fa-user"></i>&nbsp;&nbsp;&nbsp;Gauest</label>
                    <select id="guest" name="guest" className='guest' required>
                        <option value="australia">1 Adult</option>
                        <option value="canada">2 Adult</option>
                        <option value="usa">3 Adult</option>
                    </select>
                </div>
                <div className="flex-form">
                    <span onClick={handleBooking}>Book now</span>
                </div>
            </form>
            <img src={assets.arrow} alt="" className='book-img' />
        </div>
        <div className="about">
            <div className="about-feast">
                <div className="about-feast-grid">
                    <div className="feast-grid-img">
                        <img src={assets.about} alt="" />
                    </div>
                    <div className="feast-grid-content">
                        <span className='title'>FEED THE BEAST WITH<br/> A PIZZA FEAST</span>
                        <div className="feast-grid">
                            <div className="feast-grid-detail">
                                <span className='title-detail'>
                                    <img src={assets.oil} alt="" />
                                    <p className='oil'>Italian Oil</p>
                                    <p className='detail'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam 
                                        aliquid vel fuga consequuntur dignissimos laudantium excepturi 
                                        provident necessitatibus.
                                    </p>
                                </span>
                            </div>
                            <div className="feast-grid-detail-left">
                                <span className='title-detail'>
                                    <img src={assets.tomatoes} alt="" />
                                    <p className='tomatoes'>Tomatoes</p>
                                    <p className='detail'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam 
                                        aliquid vel fuga consequuntur dignissimos laudantium excepturi 
                                        provident necessitatibus.
                                    </p>
                                </span>
                            </div>
                            <div className="feast-grid-detail">
                                <span className='title-detail'>
                                    <img src={assets.shrimp} alt="" />
                                    <p className='shrimp'>Fresh Ingrediets</p>
                                    <p className='detail'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam 
                                        aliquid vel fuga consequuntur dignissimos laudantium excepturi 
                                        provident necessitatibus.
                                    </p>
                                </span>
                            </div>
                            <div className="feast-grid-detail-left">
                                <span className='title-detail'>
                                    <img src={assets.like} alt="" />
                                    <p className='like'>Top Chefs</p>
                                    <p className='detail'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam 
                                        aliquid vel fuga consequuntur dignissimos laudantium excepturi 
                                        provident necessitatibus.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="about-taste">
                <div className="about-taste-side">
                    <span className='title'>PIZZA WITH GREAT TASTE</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed varius, mauris id vestibulum.
                    </p>
                </div>
                <div className="about-taste-img">
                    <div className="about-taste-recipe">
                        <img src={assets.peperoni} alt="" />
                        <span className='title'>Peperoni</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                        <button>+ Add to Cart</button>
                    </div>
                    <div className="about-taste-recipe">
                        <img src={assets.veggie} alt="" />
                        <span className='title'>Veggie Pizza</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                        <button>$39.00</button>
                    </div>
                    <div className="about-taste-recipe">
                        <img src={assets.margherita} alt="" />
                        <span className='title'>Margherita</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                        <button>$49.00</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="order">
            <div className="text-wrapper">
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
                <p>*WE LOVE PIZZA*</p>
            </div>
            <div className="order-content">
                <div className="order-content-one">
                    <img src={assets.order1} alt="" />
                </div>
                <div className="order-content-two">
                    <span className='detail'>
                        <p className='title'>
                            ORDER NOW
                        </p>
                        <p className='content'>
                            Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu.
                        </p>
                        <Link to="/menu"><button>
                            ORDER NOW
                        </button>
                        </Link>
                    </span>
                </div>
                <div className="order-content-three">
                    <img src={assets.order2} alt="" />
                </div>
            </div>
        </div>
        <div className="best-pizza">
            <div className="best-pizza-container">
                <span className='title'>
                    ORDER BEST PIZZA
                </span>
                <div className="best-pizza-content">
                    <div className="best-pizza-content-left">
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Buffalo</span>
                                <span className='price'>$49</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Palermo</span>
                                <span className='price'>$38</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Napolitano</span>
                                <span className='price'>$52</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Bologneze</span>
                                <span className='price'>$35</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Vegetarian</span>
                                <span className='price'>$40</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                    </div>
                    <div className="best-pizza-content-right">
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Cappriciosa</span>
                                <span className='price'>$47</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Margherita</span>
                                <span className='price'>$39</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Hawaiian</span>
                                <span className='price'>$53</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Vegetarian</span>
                                <span className='price'>$40</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                        <div className="best-pizza-content-list">
                            <div className="best-pizza-content-list-detail">
                                <span className='titles'>Bologneze</span>
                                <span className='price'>$36</span>
                            </div>
                            <span className='detail'>
                                Tomato sauce, mozzarella, virgin olive oil, fresh basil, 
                                garlic, pesto sos, mayo and ketchup flavours
                            </span>
                        </div>
                    </div>
                </div>
                <div className="best-pizza-buttom">
                    <div className="best-pizza-img1">
                        <img src={assets.order_pizza} alt="" />
                    </div>
                    <div className="best-pizza-order">
                        <Link to="/menu">
                        <button>ORDER NOW</button>
                        </Link>
                        <p>* Offers available for carry-out and delivery orders only.</p>
                    </div>
                    <div className="best-pizza-img2">
                        <img src={assets.order_pizza1} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
        <div className="speciality">
            <div className="speciality1">
                <div className="speciality1-content">
                    <img src={assets.pizza1} alt="" />
                </div>
                <div className="speciality2-content">
                    <span className='content1-title'>
                        THE SPECIALITY <br/>OF THE HOUSE
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, <br/>sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.
                    </p>
                    <Link to="/menu">
                    <button>ORDER NOW</button>
                    </Link>
                </div>
                
            </div>
            <div className="speciality2">
                <div className="speciality1-content2">
                    <span className='content-title'>
                        TWO PIZZAS FOR <br/>THE PRICE OF ONE
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, <br/>sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.
                    </p>
                    <span className='price'>
                        <div className="price1">
                            <p><span className='dot'>•</span> &nbsp;Cappriciosa</p>
                            <p><span className='dot'>•</span> &nbsp;Vesuvio</p>
                            <p><span className='dot'>•</span> &nbsp;Quatri Stagione</p>
                        </div>
                        <div className="price2">
                            <p><span className='dot'>•</span> &nbsp;Funghi Rosa</p>
                            <p><span className='dot'>•</span> &nbsp;Pepperoni</p>
                            <p><span className='dot'>•</span> &nbsp;Stivale</p>
                        </div>
                    </span>
                </div>
                <div className="speciality2-content2">
                    <img src={assets.pizza2} alt="" />
                </div>
            </div>
        </div>
        <div className="pizza-marquee">
            <div className="marquee-container">
                <div className="marquee-img">
                    <img src={assets.marquee1} alt="" />
                </div>
                <div className="marquee-img">
                    <img src={assets.marquee2} alt="" />
                </div>
                <div className="marquee-img">
                    <img src={assets.marquee3} alt="" />
                </div>
                <div className="marquee-img">
                    <img src={assets.marquee4} alt="" />
                </div>
                <div className="marquee-img">
                    <img src={assets.marquee5} alt="" />
                </div>
            </div>
            <div className="marquee-text">
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
                <p>*WE LOVE FASTFOOD*</p>
            </div>
        </div>
    </div>
  )
}

export default Body