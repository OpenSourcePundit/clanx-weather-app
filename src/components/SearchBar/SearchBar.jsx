import React from 'react'
import './SearchBar.css'; 
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  return (
    <div className="search-bar">
    <input type="text" placeholder="Search for Places" />
    <button className="search-btn">
      <FaSearch />
    </button>
  </div>
  )
}

export default SearchBar