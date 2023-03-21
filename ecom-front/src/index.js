import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Login from './components/Login';

const history = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter history={history}>
  <Routes>
    <Route path='/' element={<Header><App/></Header>}/>
    <Route path="/product" element={<Header><Products/></Header>} />
    <Route path="/Login" element={<Header><Login/></Header>} />

  </Routes>
 </BrowserRouter>
);
