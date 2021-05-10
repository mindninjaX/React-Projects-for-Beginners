import React from "react";

const SearchBox = ({ filteredRobots, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Cats"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
