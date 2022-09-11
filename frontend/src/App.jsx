import React, {useState} from 'react';
import './App.css';
import Search from './search';
import Navbar from './navbar';
// import { Link } from 'react-router-dom';
import ClassroomList from './classroomList';

function App() {

  const [classroomList, setClassroomList] = useState([])
  return (
    <div className="App">
      {/* <Link to="/expenses">Expenses</Link> */}
      <Navbar />
      <Search setClassroomList={setClassroomList}/>
      <ClassroomList classroomList={classroomList}/>
    </div>
  );
}

export default App;
