import React, { useState } from "react";
import SearchIcon from "./SearchIcon";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleOnClick = () => {
    props.handleOnSearch(searchValue)
    setSearchValue("")
  }

  return (
    <div>
      <SearchIcon />
      <input
        placeholder="search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default Search;
