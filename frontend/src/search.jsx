import React from 'react';
import {getClassroom} from './service';

const Search = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getClassroom('111');
    console.log(data);
  };
  return (
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
  );
};

export default Search;
