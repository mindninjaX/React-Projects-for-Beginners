import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
  const { search, setSearch } = useState("");

  FIXME: const onSearchChange = (e) => {
    const searchfield = e.target.value;
    setSearch = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  };

  return (
    <div className="tc">
      <h1>CatFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
