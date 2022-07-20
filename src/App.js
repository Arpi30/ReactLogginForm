import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Form from './loginForm/Components/form';
import Home from "./loginForm/Components/home";

import MainPage from './loginForm/Components/mainPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<MainPage />}>
          <Route path="home"  element={<Home />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
