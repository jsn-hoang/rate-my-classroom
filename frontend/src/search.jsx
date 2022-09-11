import React from 'react';
import {getClassroom} from './service';

const Search = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getClassroom('etlc e1-007');
    console.log(data);
    if (data == 'search not found'){
      console.log('')
    }
  };
  return (
  <div>
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
}

export default Search;
