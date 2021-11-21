import './App.css';
// import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Bucket from './pages/Bucket';
import Profile from './pages/Profile';
import Places from './pages/Places';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element={<Home />}/>
        <Route exact path = "/login" element={<Login />}/>
        <Route exact path = "/signup" element={<Signup />}/>
        <Route exact path = "/bucket" element={<Bucket />}/>
        <Route exact path = "/profile" element={<Profile />}/>
        <Route exact path = "/places" element={<Places />}/>
      </Routes>
      <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;