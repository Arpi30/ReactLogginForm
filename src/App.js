import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Form from './loginForm/Components/form';
import Home from "./loginForm/Components/home";

import MainPage from './loginForm/Components/mainPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="d-flex w-25 justify-content-evenly m-0 p-0">
          <li className="list-unstyled">
            <Link className="text-decoration-none text-light" to="/">Home</Link>
          </li>
          <li className="list-unstyled">
            <Link className="text-decoration-none text-light" to="/form">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="form" element={<Form />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
