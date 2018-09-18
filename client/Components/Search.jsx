import React from 'react';

const Search = props => (
  <form onSubmit={props.submit}>
    <label>
        Restaurant:
      <input type="number" onChange={props.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default Search;
