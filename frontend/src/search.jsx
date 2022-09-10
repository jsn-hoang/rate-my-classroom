import React from 'react';
import {getClassroom} from './service';

const Search = () => {
  const handleSubmit = async () => {
    const data = await getClassroom('etlc');
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="header-search">
        <input
          type="text"
          id="header-search"
          placeholder="Search for a classroom"
          name="s"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
