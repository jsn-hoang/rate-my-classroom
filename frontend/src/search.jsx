import React from 'react';
import { getClassroom } from './service';
import './search.css';

const Search = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = document.getElementById('header-search').value;
    const data = await getClassroom(val);
    console.log(data);
    document.getElementById('header-search').value = '';
  };
  return (
    <div className="search">
      <form>
        <label htmlFor="header-search">
          <input
            type="text"
            id="header-search"
            placeholder="Search for a classroom"
            name="s"
          />
        </label>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default Search;
