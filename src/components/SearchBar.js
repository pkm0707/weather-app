import React, { useState } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      fetchWeather(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
        style={{fontSize:30}}
      />
      <button type="submit" style={{marginLeft:20,fontSize:30,cursor:'pointer'}}>Search</button>
    </form>
  );
};

export default SearchBar;
