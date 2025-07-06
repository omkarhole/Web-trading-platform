import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import AboutPage from './Landing_page/about/AboutPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import ProductPage from './Landing_page/products/ProductPage';
import SupportPage from './Landing_page/support/SupportPage';
import NotFound from './Landing_page/NotFound';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
     
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aboutpage' element={<AboutPage />} />
      <Route path='/pricingpage' element={<PricingPage />} />
      <Route path='/productpage' element={<ProductPage />} />
      <Route path='/supportpage' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
     
    </Routes>
     <Footer />
  </BrowserRouter>
)
