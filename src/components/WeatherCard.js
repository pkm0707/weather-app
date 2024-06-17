import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{date} - {time}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
