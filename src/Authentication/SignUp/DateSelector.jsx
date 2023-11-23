/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import arrow from "../../assets/CaretDown.png";
import "./SignUp.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ... (imports and other code)

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
    // Only update the day if the form is not submitted
    if (!isFormSubmitted) {
      setMyDay(date);
    }
    onChange(date); // Propagate the change to the parent component
  };

  const handleMonthChange = (date) => {
    setMyMonth(date);
    // Only update the day if the form is not submitted
    if (!isFormSubmitted) {
      setMyDay(date);
    }
    onChange(date); // Propagate the change to the parent component
  };

  const handleDayChange = (date) => {
    setMyDay(date);
    onChange(date); // Propagate the change to the parent component
  };

  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <div className="year_input">
          <DatePicker
            selected={myYear}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            value={value}
          />
        </div>

        <div className="month_input">
          <DatePicker
            showMonthYearPicker
            dateFormat="MMMM"
            selected={myMonth}
            onChange={handleMonthChange}
            value={value}
          />
        </div>

        <div className="day">
          <DatePicker
            dateFormat="dd"
            selected={myDay}
            renderDayContents={renderDayContents}
            onChange={handleDayChange}
            value={value}
          />
        </div>
      </div>
    </>
  );
};

export default DateSelector;
