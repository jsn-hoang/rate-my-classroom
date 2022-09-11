import React from 'react';
import './App.css';
import Search from './search';
import Navbar from './navbar';
import { Classroom } from './Classroom';
import { Link, Routes, Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to="/classrooms/2">class 2</Link>
      <Routes>
        <Route path="/" element={<><Navbar/><Search/></>}/>
        <Route path="/classrooms/:id" element={<><Navbar/><Classroom/></>}/>
      </Routes>
    </>
  )
}

export default App;
