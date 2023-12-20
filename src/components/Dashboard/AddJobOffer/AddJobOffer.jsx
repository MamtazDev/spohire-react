/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";
import brows from '../../../assets/brows1.png';
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
  const [image, setImage] = useState("")
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
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile.name);
    setImage(selectedFile.name)
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
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="title" />
                      </div>
                      <input type="text" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter Announcement Title" />
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Company Logo</label>
                      <input
                        type="file"
                        className="form-control"
                        id="exampleFormControlInput1"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} // Hide the default file input
                      />
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={brows} alt="user" />
                      </div>
                      <input type="text"
                        onClick={() => fileInputRef.current.click()}
                        className="form-control ps-5" value={image} style={{ cursor: "pointer" }} id="exampleFormControlInput1" placeholder="Brows Here" />
                    </div>


                    {/* SELECT */}
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Employer Location</label>
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
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="user" />
                      </div>
                      <input type="text" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your company" />
                    </div>
                    <div className="position-relative text-start " style={{ marginBottom: "32px" }}>
                      <label htmlFor="exampleFormControlInput1" className="form-label">Workplace Type</label>
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="user" />
                      </div>
                      <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Select your region" />
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
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={salary} alt="user" />
                      </div>
                      <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Numerical digit only" />
                    </div>

                  </div>
                  <div className="position-relative text-start">
                    <div className="mb-3">
                      <label hytmlFor="exampleFormControlInput1" className="form-label">Description</label>
                      <div class="input-group mb-3">
                        <textarea type="text" style={{ height: "65px" }} className="form-control" placeholder="Enter Your Description...." aria-label="Username" aria-describedby="basic-addon1" />
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
