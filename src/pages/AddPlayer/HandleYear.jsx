/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import arrow from "../../assets/CaretDown.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HandleYear = ({ setInitialYear, value, onChange, isFormSubmitted }) => {
  const currentDate = new Date();

  const [myMonth, setMyMonth] = useState(currentDate);
  const [myYear, setMyYear] = useState(currentDate);
  const [myDay, setMyDay] = useState(currentDate);

  useEffect(() => {
    setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), 1));
  }, [myMonth, myYear, setMyDay]);

  const handleYearChange = (date) => {
    setMyYear(date);
    setInitialYear(date);
    // Only update the day if the form is not submitted
    if (!isFormSubmitted) {
      setMyDay(date);
    }
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
      </div>
    </>
  );
};

export default HandleYear;
