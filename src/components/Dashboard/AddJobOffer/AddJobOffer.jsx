/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";
import brows from "../../../assets/brows1.png";
import region from "../../../assets/aregion.png";
import salary from "../../../assets/asalary.png";
import "./AddJobOffer.css";
import { useAddJobMutation } from "../../../features/job/jobApi";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddJobOfferModal from "./AddJobOfferModal.jsx";
import AddJobOfferModalTwo from "./AddJobOfferModalTwo.jsx";
import { setExpireDate } from "../../../utils/setExpireDate.js";

const options = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  {
    value: "Contract",
    label: "Contract",
  },
  { value: "Temporary", label: "Temporary" },
];

const categoryOptions = [
  { value: "Coach", label: "Coach" },
  { value: "Administration", label: "Administration" },
  { value: "Marketing", label: "Marketing" },
  { value: "Betting", label: "Betting" },
  { value: "Customer service", label: "Customer service" },
  { value: "Manager", label: "Manager" },
  { value: "Agent", label: "Agent" },
  { value: "Journalist", label: "Journalist" },
  { value: "Scout", label: "Scout" },
  { value: "Referee", label: "Referee" },
];

const WorkplaceOptions = [
  { value: "On-site", label: "On-site" },
  { value: "Hybrid", label: "Hybrid" },
  {
    value: "Remote",
    label: "Remote",
  },
];

const AddJobOffer = ({ onHide, isModalOpen, closeModal }) => {
  const [nextOption, setNextOption] = useState("AddJobOfferModal");
  const { user } = useSelector((state) => state.auth);
  const [image, setImage] = useState("");
  const [imageFile, setImageFIle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [workplaceType, setWorkplaceType] = useState("");
  const [countryNames, setCountryNames] = useState([]);
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [addJob, { isLoading: addingJob }] = useAddJobMutation();
  const navigate = useNavigate();

  const [selectedSubscription, setSelectedSubscription] = useState({
    duration: "1 months",
    price: 10,
    month: 1,
  });

  const [jobData, setJobData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setJobData({ ...jobData, [name]: value });
  };

  console.log(jobData, "jobData");

  const handleSubmit = async () => {
    setLoading(true);
    const date = new Date();

    const jobDataInfo = {
      ...jobData,
      subscriptionDate: date,
      expirationDate: setExpireDate(selectedSubscription?.month),
      creator: user?._id,
    };

    const formData = new FormData();

    Object.entries(jobDataInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await addJob(formData);
      if (response?.data?.success) {
        setLoading(false);
        return true;
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
        setLoading(false);
        return false;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
      setLoading(false);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile.name);
    setImageFIle(selectedFile);
    setJobData({ ...jobData, club_logo: selectedFile });
  };
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
      )
      .then(function (response) {
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleNextOption = () => {
    setNextOption("AddJobOfferModalTwo");
  };

  return (
    <div className={` ${styles.addJob_wrapper}`}>
      <Modal
        centered
        show={isModalOpen}
        onHide={onHide}
        className="modal_width1"
      >
        {/*closeButton*/}
        <Modal.Header className="p-0">
          <Modal.Title className="text-center"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 add_job_offer_admin">
          <div className="personal_info_edit_wrapper add_job_offer">
            <div
              className="d-flex flex-column align-items-start gap-3"
              style={{ marginBottom: "40px" }}
            >
              <div
                // onSubmit={handleSubmit}
                className="w-100 player_job_form_wrapper mt-0"
              >
                {nextOption === "AddJobOfferModal" && (
                  <AddJobOfferModal
                    fileInputRef={fileInputRef}
                    handleFileChange={handleFileChange}
                    image={image}
                    selectedCountry={selectedCountry}
                    countryNames={countryNames}
                    options={options}
                    WorkplaceOptions={WorkplaceOptions}
                    categoryOptions={categoryOptions}
                    handleInputChange={handleInputChange}
                  />
                )}

                {nextOption === "AddJobOfferModalTwo" && (
                  <AddJobOfferModalTwo
                    handleSubmit={handleSubmit}
                    addingJob={addingJob}
                    selectedSubscription={selectedSubscription}
                    setSelectedSubscription={setSelectedSubscription}
                    closeModal={closeModal}
                  />
                )}

                {/*<button*/}
                {/*  className="submit_now_btn w-100 m-0"*/}
                {/*  // onClick={onHide}*/}
                {/*  type="submit"*/}
                {/*  disabled={loading || isLoading}*/}
                {/*>*/}
                {/*  {loading ? "Adding..." : "Add Job"}*/}
                {/*</button> */}

                {nextOption === "AddJobOfferModal" ? (
                  <button
                    onClick={handleNextOption}
                    className="submit_now_btn w-100 m-0"
                    // onClick={onHide}
                    type="button"
                    // disabled={loading || isLoading}
                  >
                    Next
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddJobOffer;
