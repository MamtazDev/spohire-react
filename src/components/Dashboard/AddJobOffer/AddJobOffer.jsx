/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";
import auser from '../../../assets/auser.png';
import region from '../../../assets/aregion.png';
import dob from '../../../assets/adob.png';
import position from '../../../assets/afullname.png';
import weight from '../../../assets/aweight.png';
import height from '../../../assets/aheight.png';
import salary from '../../../assets/asalary.png';
import language from '../../../assets/alanguage.png';
import "./AddJobOffer.css";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const AddJobOffer = ({ onHide, isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    birthDate: '',
    playingPosition: '',
    weight: '',
    height: '',
    expectedSalary: '',
    language: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log()
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={` ${styles.addJob_wrapper}`}>
      <Modal
        centered
        show={isModalOpen} onHide={onHide} className="modal_width1">
        <Modal.Header closeButton className='p-0'>
          <Modal.Title className="text-center">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <div className="personal_info_edit_wrapper add_job_offer">
            <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }}>
              <div className="w-100 player_job_form_wrapper">
                <div className="text-center modal_title">
                  Add Job offer
                </div>
                <div className="row">
                  <div className="col-lg-6">

                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>

                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Announcement Title" />
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Company Logo</label>

                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter location" />
                    </div>


                    {/* SELECT */}
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employer Location</label>
                      {/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Status" /> */}
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                      />
                    </div>
                    {/* SELECT */}
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Job type</label>
                      {/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Status" /> */}
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                      />
                    </div>


                  </div>
                  <div className="col-lg-6 ">
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Numerical digit only" />
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Workplace Type</label>

                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Select your region" />
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                      />
                      {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Select your region" /> */}
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Salary</label>

                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Select your region" />
                    </div>

                  </div>
                  <div className="position-relative text-start">
                    <div className="mb-3">
                      <label hytmlFor="exampleFormControlInput1" className="form-label">Description</label>
                      <div class="input-group mb-3">
                        <textarea type="text" style={{ height: "65px" }} className="form-control" placeholder="Description...." aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='border-0 p-0'>
          <button className='submit_now_btn w-100 m-0' onClick={onHide}>
            Submit Now
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddJobOffer;
