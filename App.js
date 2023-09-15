import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/css/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Review from "./pages/Review";
import Contact from "./pages/Contact";





const App=()=>
{
   return(
      <>
          
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}  >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
        
        </Route>
      </Routes>
</BrowserRouter>



      </>
      );
}


export default App;