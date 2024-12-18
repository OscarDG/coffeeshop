import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/index.css';
import App from './App';
import About from './pages/about';
import Store from './elements/store';
import Partners from './pages/partners';
import reportWebVitals from './reportWebVitals';
import Mainproducts from './pages/main-products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Mainproducts />} />
        <Route path='/aliados' element={<Partners />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
