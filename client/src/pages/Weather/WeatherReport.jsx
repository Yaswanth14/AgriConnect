import React, { useEffect, useState } from "react";

const WeatherReport = ({ date }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "a81bf9d4bac301abc0d45d58279b5010";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=visakhapatnam,in&mode=json&appid=${apiKey}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      {weatherData ? (
        <div>
          {/* <h2>Weather Report for {date.toLocaleDateString()}</h2> */}
          {/* <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p> */}
          {/* Add more weather data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherReport;
