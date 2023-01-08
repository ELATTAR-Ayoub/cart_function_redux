import React from 'react';

// routes
import Home from './pages/Home.jsx';
import Products from './pages/Products/index';
import Men from './pages/Products/Men';
import Women from './pages/Products/Women';
import { Routes, Route } from 'react-router-dom';

// global compo
import Nav from './Components/nav';
import Cart from './Components/cart';

// redux
import { Provider } from "react-redux";
import store from "./store";


function App() {

  return (
    <Provider store={store}>
    <div  className={`mx-auto App overflow-x-hidden`}>
      <Nav />
      <Cart />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route exact path="/products" element={ <Products/> } />
        <Route exact path="/products/men" element={ <Men/> } />
        <Route exact path="/products/women" element={ <Women/> } />
      </Routes>
    </div>
    </Provider>
  )
}

export default App;
