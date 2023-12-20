/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CoachJobForm from "./CoachJobForm";
import PlayerJobForm from "./PlayerJobForm";
import styles from "./Modal.module.css";
import "./AddJobOffer.css";

const AddJobOffer = ({ onHide, isModalOpen, closeModal }) => {
  const [selectBtn, setSelectBtn] = useState("Player");

  const handeSelectBtn = (btnType) => {
    setSelectBtn(btnType);
  };

  return (
    <div className={` ${styles.addJob_wrapper}`}>
      <Modal
        centered
        show={isModalOpen}
        onHide={onHide}
        className="modal_width"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Job Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="">
            <div className="row">
              <div className="col-12">
                <div className="">
                  <div className="d-flex">
                    <button
                      className={`jobOffer_btn ${
                        selectBtn === "Coach" ? "active_position" : ""
                      }`}
                      onClick={() => handeSelectBtn("Coach")}
                    >
                      Coach
                    </button>

                    <button
                      className={`jobOffer_btn ${
                        selectBtn === "Player" ? "active_position" : ""
                      }`}
                      onClick={() => handeSelectBtn("Player")}
                    >
                      Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectBtn === "Coach" ? (
            <CoachJobForm closeModal={closeModal} />
          ) : (
            <PlayerJobForm closeModal={closeModal} />
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 p-0"></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddJobOffer;
