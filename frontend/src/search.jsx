import React from 'react';

const Search = () => (
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
);

export default Search;
