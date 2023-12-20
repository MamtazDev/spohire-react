/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import "./SignUp.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ value, onChange, isFormSubmitted }) => {
  const currentDate = new Date();
  const [myMonth, setMyMonth] = useState(currentDate);
  const [myYear, setMyYear] = useState(currentDate);
  const [myDay, setMyDay] = useState(currentDate);

  const minDate = new Date(myYear.getFullYear(), myMonth.getMonth(), 1);
  const maxDate = new Date(myYear.getFullYear(), myMonth.getMonth() + 1, 0);

  useEffect(() => {
    setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), 1));
  }, [myMonth, myYear, setMyDay]);

  const renderDayContents = (day, date) => {
    if (date < minDate || date > maxDate) {
      return <span></span>;
    }
    return <span>{date.getDate()}</span>;
  };

  const handleYearChange = (date) => {
    setMyYear(date);
    if (!isFormSubmitted) {
      setMyDay(date);
    }
    onChange(date);
  };

  const handleMonthChange = (date) => {
    setMyMonth(date);
    if (!isFormSubmitted) {
      setMyDay(date);
    }
    onChange(date);
  };
  const handleDayChange = (date) => {
    setMyDay(date);
    onChange(date);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <div className="day">
          <DatePicker
            dateFormat="dd"
            selected={myDay}
            renderDayContents={renderDayContents}
            onChange={handleDayChange}
            value={value}
            placeholderText="Date"
          />
        </div>
        <div className="month_input">
          <DatePicker
            showMonthYearPicker
            dateFormat="MMMM"
            selected={myMonth}
            onChange={handleMonthChange}
            value={value}
            placeholderText="Month"
          />
        </div>

        <div className="year_input">
          <DatePicker
            selected={myYear}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            value={value}
            placeholderText="Year"
          />
        </div>
      </div>
    </>
  );
};

export default DateSelector;
