import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.submit}>
      <label>
        Name:
        <input type="number" onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default Search;