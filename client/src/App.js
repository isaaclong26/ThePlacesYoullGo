import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Bucket from './pages/Bucket';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./components/LoginRoute";

function App() {
  const [token, setToken] = useState();
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
      <Route exact path = "/" element={<Home />}/>
      <Route exact path = "/login" element={<Login />}/>
      <Route exact path = "/buket" element={<Bucket />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;