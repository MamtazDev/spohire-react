import React, { useState } from "react";
import DatePicker from "react-datepicker";

const ExperienceTab = ({
  setFinalYear,
  setInitialYear,
  setClubDetails,
  clubDetails,
}) => {
  const currentDate = new Date();
  const [myYearInit, setMyYearInit] = useState(currentDate);
  const [myYearLast, setMyYearLast] = useState(currentDate);

  const handleInitialYearChange = (date) => {
    setMyYearInit(date);

    const modifyDate = new Date(date);
    setInitialYear(modifyDate.getFullYear());
  };
  const handleLastYearChange = (date) => {
    setMyYearLast(date);

    const modifyDate = new Date(date);
    setFinalYear(modifyDate.getFullYear());
  };

  return (
    <div className="d-flex align-items-center gap-3">
      <div className="d-flex align-items-center gap-2">
        {/* <HandleYear setInitialYear={setInitialYear} /> */}
        <div className="d-flex align-items-center gap-1">
          <div className="year_input">
            <DatePicker
              selected={myYearInit}
              //   onChange={handleYearChange}
              onChange={handleInitialYearChange}
              showYearPicker
              dateFormat="yyyy"

              //   disabled
            />
          </div>
        </div>
        <div className="hifen">-</div>
        {/* <HandleYear /> */}
        <div className="d-flex align-items-center gap-1">
          <div className="year_input">
            <DatePicker
              selected={myYearLast}
              onChange={handleLastYearChange}
              showYearPicker
              dateFormat="yyyy"

              //   disabled
            />
          </div>
        </div>
      </div>

      <div className="">
        <input
          type="text"
          className="mt-2 form-control login_input"
          placeholder="Club name"
          value={clubDetails}
          onChange={(e) => setClubDetails(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExperienceTab;
