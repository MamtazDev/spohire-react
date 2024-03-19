import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import upload from "../../../assets/upload.svg";

const ApplyModal = ({ show, setShow }) => {
  const [countryNames, setCountryNames] = useState([]);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [selected, setSelected] = useState("");
  const fileRef = useRef();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,callingCodes,flags")
      .then(function (response) {
        const countries = response.data;
        const hongKongIndex = countries.findIndex(
          (country) => country.name.common === "Hong Kong"
        );
        const chinaIndex = countries.findIndex(
          (country) => country.name.common === "China"
        );
        if (hongKongIndex !== -1 && chinaIndex !== -1) {
          const hongKong = countries.splice(hongKongIndex, 1)[0];
          const china = countries.splice(chinaIndex, 1)[0];

          countries.unshift(china);
          countries.unshift(hongKong);
        }

        setCountryNames(countries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Modal
      size="sm"
      className="apply_job"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Apply fot this job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row gx-4 gy-5">
            <div className="col-lg-6">
              <label>First Name *</label>
              <input type="text" placeholder="Enter Your First Name" required />
            </div>
            <div className="col-lg-6">
              <label>Last Name *</label>
              <input type="text" placeholder="Enter Your Last Name" required />
            </div>
            <div className="col-lg-6">
              <label>Mail address *</label>
              <input
                type="email"
                placeholder="Enter your mail address"
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Phone Number *</label>

              <div
                ref={dropdownRef}
                className="d-flex align-items-center drop py-0"
              >
                <div className="position-relative">
                  <div
                    className="d-flex align-items-center gap-1  "
                    onClick={() => setDropdownShow(!dropdownShow)}
                  >
                    <img
                      width={20}
                      height={13}
                      className="m-0"
                      src={selected ? selected : countryNames[0]?.flags.png}
                      alt=""
                    />

                    <IoIosArrowDown className="text-primary fs-4" />
                  </div>
                  {dropdownShow && (
                    <div
                      style={{ maxHeight: "300px", overflowY: "scroll" }}
                      className="position-absolute  bg-white shadow-sm p-3 d-flex flex-column gap-2"
                    >
                      {countryNames.map((data, index) => (
                        <div
                          style={{ cursor: "pointer" }}
                          className="d-flex gap-2 align-items-center"
                          key={index}
                          onClick={() => setSelected(data.flags.png)}
                        >
                          <img
                            className="m-0"
                            width={20}
                            src={data.flags.png}
                            alt=""
                          />
                          <p className="fs-6 mb-0">{data.name.common}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input type="tel" placeholder="+1  ** **** ***" />
              </div>
            </div>
            <div>
              <label>Resume or CV *</label>
              <input ref={fileRef} type="file" className="d-none" />
              <div
                onClick={() => fileRef.current.click()}
                className="upload d-flex align-items-center justify-content-center gap-3"
              >
                <img className="m-0" src={upload} alt="" />
                <p>
                  Drop your file or <span>Upload</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <label>Cover Letter</label>
              <textarea placeholder="Type here"></textarea>
            </div>
            <div id="special" className="d-flex align-items-center gap-2">
              <input type="checkbox" id="cover" className="w-auto" />
              <label htmlFor="cover">
                I accept the Sophire privacy and terms.
              </label>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center gap-5 border-top-0">
        <button className="cancel_btn" onClick={() => setShow(false)}>
          Cancel
        </button>
        <button className="submit_btn" onClick={() => setShow(false)}>
          Submit Application
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyModal;
