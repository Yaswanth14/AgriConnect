import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

const DateSelector = ({ setToday }) => {
  // Function to generate an array of dates for today and the next 6 days
  const generateDates = () => {
    const dates = [];
    let currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      dates.push(currentDate);
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
    return dates;
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const dates = generateDates();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setToday(date);
    // You can pass the selected date to another component or perform any other action here
  };

  return (
    <div>
      <h2>Select a Date:</h2>
      <div>
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            style={{
              margin: "5px",
              background:
                date.getDate() === selectedDate.getDate()
                  ? "lightblue"
                  : "white",
            }}
          >
            {`${date.toLocaleDateString("en-US", {
              weekday: "short",
            })}, ${date.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}`}
          </button>
        ))}
      </div>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
    </div>
  );
};

export default DateSelector;
