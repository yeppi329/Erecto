import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
//import First from './component/App';
import Home from './pages/Home';
import Month from './pages/Scanlist';
import Product from './component/ScanlistProduct/Product';
import Reject from './pages/Reject';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/month' element={<Month />} />
        <Route path='/month/:label' element={<Product />} />
        <Route path='/reject' element={<Reject />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>

    </div>
  );
}
export default App;