import React from 'react';
import './App.css';
import Search from './search';
import Navbar from './navbar';
import { Classroom } from './Classroom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar/><Search/></>}/>
      <Route path="/classrooms/:id" element={<><Navbar/><Classroom/></>}/>
    </Routes>
  )
}

export default App;
