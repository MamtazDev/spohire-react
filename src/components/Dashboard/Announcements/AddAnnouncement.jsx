/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import p1 from '../../../assets/p1.png';

const AddAnnouncement = ({ onHide, isModalOpen }) => {

    const [selectBtn, setSelectBtn] = useState("Player");
    const handeSelectBtn = (btnType) => {
        setSelectBtn(btnType)
    }
    return (
        <div >
            <Modal
                centered
                show={isModalOpen} onHide={onHide} className="modal_width">
                <Modal.Header closeButton className='p-0'>
                    <Modal.Title>Add An Announcement</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className="personal_info_edit_wrapper">
                        <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }}>
                            <div className="w-100 player_job_form_wrapper">
                                <div className="position-relative text-start">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>

                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Announcement Title" />
                                </div>
                                <div className="position-relative text-start">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>

                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter location" />
                                </div>
                                <div className="position-relative text-start">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Status" />
                                </div>
                                <div className="position-relative text-start">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Budget</label>

                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Numerical digit only" />
                                </div>
                                <div className="position-relative text-start">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>

                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Select your region" />
                                </div>
                                <div className="position-relative text-start">
                                    <div className="mb-3">
                                        <label hytmlFor="exampleFormControlInput1" className="form-label">Description</label>
                                        <div class="input-group mb-3">
                                            <textarea type="text" class="form-control" placeholder="Description...." aria-label="Username" aria-describedby="basic-addon1" />
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

export default AddAnnouncement;