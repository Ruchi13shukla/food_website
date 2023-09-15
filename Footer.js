import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <Link to="/">Home</Link>
          <Link to="/about">Abouts</Link> 
          <Link to="/menu">Menu</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>
        </div>
       
      </section>
    </>
  );
};

export default Footer;
