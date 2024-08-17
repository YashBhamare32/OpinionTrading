import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {BrowserRouter , Route, Routes} from "react-router-dom"
import axios from 'axios';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
