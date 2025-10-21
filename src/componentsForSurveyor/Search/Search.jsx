import React from "react";
import styles from "./Search.module.scss";

const Search = ({ handleSearch }) => {
  return (
    <form>
      <input onChange={(e) => handleSearch(e.target.value)} type="text" />
    </form>
  );
};

export default Search;
