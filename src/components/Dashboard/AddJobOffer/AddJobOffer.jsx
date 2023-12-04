/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CoachJobForm from './CoachJobForm';
import PlayerJobForm from './PlayerJobForm';
import styles from './Modal.module.css'
import './AddJobOffer.css'
import { Io } from 'react-flags-select';
const AddJobOffer = ({ onHide, isModalOpen }) => {

    const [selectBtn, setSelectBtn] = useState("Coach");
    const handeSelectBtn = (btnType) => {
        setSelectBtn(btnType)
    }

    return (
        <div className={`${styles.modal_width} addJob_wrapper`}>

            <Modal show={isModalOpen} onHide={onHide} className={`${styles.modal_width}`}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Job Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{ overflow: 'hidden' }}>
                    <div className="">
                        <div className="row">
                            <div className="col-12">
                                <div className="">

                                    <div className="d-flex">
                                        <button className={`jobOffer_btn ${selectBtn === 'Coach' ? 'active' : ''}`}
                                            onClick={() => handeSelectBtn('Coach')}>
                                            Coach
                                        </button>

                                        <button className={`jobOffer_btn ${selectBtn === 'Player' ? 'active' : ''}`}
                                            onClick={() => handeSelectBtn('Player')}>
                                            Player
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        selectBtn === 'Coach' && <CoachJobForm />
                    }

                    {
                        selectBtn === 'Player' && <PlayerJobForm />
                    }

                </Modal.Body>
                <Modal.Footer className='border-0'>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddJobOffer;