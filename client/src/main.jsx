import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App.jsx';
import Banner from './banner.jsx';
import DeluxeRoom from './DeluxeRoom.jsx';
import Relax from './relax.jsx';
import Food from './food.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner /> 
    <DeluxeRoom />
    <Food />
    <Relax />
    <App />
    <Footer />
  </StrictMode>,
);
