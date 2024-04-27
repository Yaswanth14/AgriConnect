import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import DateSelector from "./DateSelector";
import WeatherReport from "./WeatherReport";

function Weather() {
  const [today, setToday] = useState("");

  return (
    <Layout>
      <div>Weather</div>
      <DateSelector setToday={setToday} />
      {/* <WeatherReport /> */}
    </Layout>
  );
}

export default Weather;
