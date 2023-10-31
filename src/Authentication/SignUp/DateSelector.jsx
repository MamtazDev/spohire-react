import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import arrow from "../../assets/CaretDown.png";
import "./SignUp.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
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
  
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <div className="year_input">
          <DatePicker
            selected={myYear}
            onChange={(date) => setMyYear(date)}
            showYearPicker
            dateFormat="yyyy"
          />
        </div>

        <div className="month_input">
          <DatePicker
            showMonthYearPicker
            dateFormat="MMMM"
            selected={myMonth}
            onChange={(date) => setMyMonth(date)}
          />
        </div>

        <div className="day">
          <DatePicker
            dateFormat="dd"
            selected={myDay}
            renderDayContents={renderDayContents}
            onChange={(date) => setMyDay(date)}
          />
        </div>
      </div>
    </>
  );
};

export default DateSelector;
