import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Banner from './banner.jsx';
import DeluxeRoom from './DeluxeRoom.jsx';
import Relax from './relax.jsx';
import Food from './food.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner /> 
    <DeluxeRoom />
    <Food />
    <Relax />
    <App />
  </StrictMode>,
);
