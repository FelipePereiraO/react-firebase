import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Profile from './pages/Profile';
function App() {
  return (
    <BrowserRouter>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>
      
    </BrowserRouter>
  );
}

export default App;
