import React, { useState } from 'react';

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleOnSubmit = e => {
    e.preventDefault();
    props.onSearch(searchTerm);
  };
  return (
    <form className="SearchBar" onSubmit={e => handleOnSubmit(e)}>
      <input
        placeholder="Enter A Song Title"
        value={searchTerm}
        onChange={({ currentTarget }) => setSearchTerm(currentTarget.value)}
      />
      <button className="SearchButton" onSubmit={e => handleOnSubmit(e)}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
