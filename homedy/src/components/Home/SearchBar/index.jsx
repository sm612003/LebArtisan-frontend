import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch, categorySuggestions, handleSuggestionClick }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
    <ul className='category-suggestions'>
      {categorySuggestions.map((category, index) => (
        <li key={index} onClick={() => handleSuggestionClick(category)}>{category}</li>
      ))}
    </ul>
  </div>
);

export default SearchBar;

