import React from "react";

function Search({ search, onSearchChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          onChange={e => onSearchChange(e.target.value)}
          value={search} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
