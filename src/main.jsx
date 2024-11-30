import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
      <Route path='/OrderPizza' element={<App />} />
    </Routes>
  </BrowserRouter>
);
