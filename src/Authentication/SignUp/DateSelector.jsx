import { useState, useEffect } from 'react';

const DateSelector = () => {
  const today = new Date();
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [selectedDate, setSelectedDate] = useState(today);
  const [years, setYears] = useState(5);
  const [dayOptions, setDayOptions] = useState([]);
  const [monthOptions, setMonthOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  useEffect(() => {
    setYearsInDropdown(years);
    initializeMonthOptions();
  }, [years]);

  useEffect(() => {
    setDays(selectedDate.getMonth());
  }, [selectedDate]);

  const setYearsInDropdown = (val) => {
    const year = today.getFullYear();
    const yearOptions = [];
    yearOptions.push(
      <option key="year-placeholder" value="">
        Year
      </option>
    );
    for (let i = 0; i < val; i++) {
      yearOptions.push(
        <option key={year + i} value={year + i}>
          {year + i}
        </option>
      );
    }
    setYearOptions(yearOptions);
  };

  const initializeMonthOptions = () => {
    const monthOptions = [];
    monthOptions.push(
      <option key="month-placeholder" value="">
        Month
      </option>
    );
    for (let i = 0; i < 12; i++) {
      monthOptions.push(
        <option key={i} value={i}>
          {getMonthName(i)}
        </option>
      );
    }
    setMonthOptions(monthOptions);
  };

  const setDays = (monthIndex) => {
    const daysCount = daysInMonth[monthIndex];
    const dayOptions = [];
    dayOptions.push(
      <option key="day-placeholder" value="">
        Day
      </option>
    );
    for (let i = 0; i < daysCount; i++) {
      dayOptions.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    setDayOptions(dayOptions);
  };

  const handleMonthChange = (e) => {
    const monthIndex = parseInt(e.target.value, 10);
    if (monthIndex >= 0) {
      setDays(monthIndex);
    }
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    setSelectedDate(newDate);
  };

  const handleDayChange = (e) => {
    const day = parseInt(e.target.value, 10);
    if (day >= 1) {
      const newDate = new Date(selectedDate);
      newDate.setDate(day);
      setSelectedDate(newDate);
    }
  };

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value, 10);
    if (year >= today.getFullYear()) {
      const newDate = new Date(selectedDate);
      newDate.setFullYear(year);
      setSelectedDate(newDate);
    }
  };

  const getMonthName = (monthIndex) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[monthIndex];
  };

  return (
    <div className="select-date">
      <select id="select-day" className='select_date'  value={selectedDate.getDate()} onChange={handleDayChange}>
        {dayOptions}
      </select>
      <select id="select-month" className='select_date'  value={selectedDate.getMonth()} onChange={handleMonthChange}>
        {monthOptions}
      </select>
      <select id="select-year"  className='select_date' value={selectedDate.getFullYear()} onChange={handleYearChange}>
        {yearOptions}
      </select>
    </div>
  );
};

export default DateSelector;
