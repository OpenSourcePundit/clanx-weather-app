
import React, { useState, useCallback, useContext } from 'react';
import './SearchBox.css';
import { FaSearch } from 'react-icons/fa';
import { DataContext } from '../../Context/dataContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (term) => {
      if (term.trim() === '') {
        setSearchResults([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
      
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [debounce, setSearchResults]
  );

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const {dispatch} = useContext(DataContext)

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for Places"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="search-btn">
        <FaSearch />
      </button>
      {loading && <div>Loading...</div>}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result,index) => (
            <div
              key={index}
              className="search-result"
              onClick={() => {
                setSearchTerm(result.name+','+result.state+','+result.country);
                setSearchResults([]);
                dispatch({type:"SET_LOCATION",payload:{lat:result.lat,lon:result.lon,location:result.name+','+result.state+','+result.country}})
              }}
            >
              {result.name},{result?.state},{result?.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
