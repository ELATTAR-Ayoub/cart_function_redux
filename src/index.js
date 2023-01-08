import React from 'react'
import ReactDOM from 'react-dom'
import './styles/tailwind.css';
import './styles/App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

