import { Outlet, Link } from "react-router-dom";
import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";
import "../assets/css/style.css";
import Footer from "./Footer";
// import { Link } from "react-router-dom";



const Layout=()=>
{
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <Link to="#" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="navbar" ref={navbarRef}>
          <Link to="/">Home</Link>
          <Link to="/about">Abouts</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>

        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <Link to="#" className="btn">
            checkout now
          </Link>
        </div>
      </header>


<Outlet />
<Footer />

   </>
		);
}

export default Layout;