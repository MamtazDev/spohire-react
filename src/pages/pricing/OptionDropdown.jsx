import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const OptionDropdown = ({ title, subtitle }) => {
  const [selected, setSelected] = useState(title);
  const [open, setOpen] = useState(false);
  return (
    <div className="pricing_dropdown">
      <div
        style={{ color: "#05CD99" }}
        className="d-flex items-center gap-3 p-3 "
        onClick={() => setOpen(!open)}
      >
        <p>{selected}</p>
        <button className="bg-transparent">
          <IoIosArrowDown
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              color: "#05CD99",
            }}
          />
        </button>
      </div>
      {open && (
        <div className="p-3 d-flex flex-column gap-3  border-top">
          {subtitle.map((data, index) => (
            <p onClick={() => setSelected(data)} key={index}>
              {data}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionDropdown;
