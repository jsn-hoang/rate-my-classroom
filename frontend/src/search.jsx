import React from 'react';
import './search.css';

const Search = () => (
  <div className="search">
    <form action="/" method="get">
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
  </div>
);

export default Search;
