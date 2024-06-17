import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ToggleThemeButton from './components/ToggleThemeButton';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const apiKey = '1c947ec42126f5d19d5055610d137b1a';

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Invalid location or connection error.');
      setWeatherData(null);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
      <SearchBar fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;

