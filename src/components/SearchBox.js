import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className="search-box">
    <label>
    Search names:
        <input type="text" onChange={searchChange}></input>
    </label>
    </div>
  );
}

export default SearchBox;
