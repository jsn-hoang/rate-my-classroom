import React from 'react';
import './App.css';
import Search from './search';
import Navbar from './navbar';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Link to="/expenses">Expenses</Link> */}
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
