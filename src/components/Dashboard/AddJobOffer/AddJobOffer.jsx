/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from "react";
import {Modal} from "react-bootstrap";
import styles from "./Modal.module.css";
import brows from "../../../assets/brows1.png";
import region from "../../../assets/aregion.png";
import salary from "../../../assets/asalary.png";
import "./AddJobOffer.css";
import {useAddJobMutation} from "../../../features/job/jobApi";
import Swal from "sweetalert2";
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import AddJobOfferModal from "./AddJobOfferModal.jsx";
import AddJobOfferModalTwo from "./AddJobOfferModalTwo.jsx";

const options = [{value: "Full-time", label: "Full-time"}, {value: "Part-time", label: "Part-time"}, {
    value: "Contract", label: "Contract"
}, {value: "Temporary", label: "Temporary"},];

const categoryOptions = [
    {value: "Coach", label: "Coach"},
    {value: "Administration", label: "Administration"},
    {value: "Marketing", label: "Marketing"},
    {value: "Betting", label: "Betting"},
    {value: "Customer service", label: "Customer service"},
    {value: "Manager", label: "Manager"},
    {value: "Agent", label: "Agent"},
    {value: "Journalist", label: "Journalist"},
    {value: "Scout", label: "Scout"},
    {value: "Referee", label: "Referee"},
];

const WorkplaceOptions = [{value: "On-site", label: "On-site"}, {value: "Hybrid", label: "Hybrid"}, {
    value: "Remote", label: "Remote"
},];

const AddJobOffer = ({onHide, isModalOpen, closeModal}) => {
    const [nextOption, setNextOption] = useState('AddJobOfferModal')
    const {user} = useSelector((state) => state.auth);
    const [image, setImage] = useState("");
    const [imageFile, setImageFIle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [workplaceType, setWorkplaceType] = useState("");
    const [countryNames, setCountryNames] = useState([]);
    const [role, setRole] = useState("");
    const [jobType, setJobType] = useState("");
    const [addJob, {isLoading}] = useAddJobMutation();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!user?.isSubsCribed) {
            setLoading(false);
            Swal.fire({
                icon: "error", title: "Oops...", text: "You are not subscribed to any plan.",
            });
            navigate("/pricing");
            return;
        }

        const form = e.target;
        const creator = user?._id;
        const title = form.title.value;
        const language = form.language.value;
        const company = form.company.value;
        const club_logo = imageFile;
        // const country = form.country.value;
        const job_location = form.job_location.value;
        const salary = form.salary.value;
        const description = form.description.value;

        const fromData = new FormData();

        fromData.append("job_title", title);
        fromData.append("company", company);
        fromData.append("language", language);
        fromData.append("club_logo", club_logo);
        fromData.append("workplaceType", workplaceType);
        fromData.append("country", selectedCountry);
        fromData.append("job_location", job_location);
        fromData.append("role", role);
        fromData.append("jobType", jobType);
        fromData.append("salary", salary);
        fromData.append("description", description);
        fromData.append("creator", creator);

        try {
            const response = await addJob(fromData);
            if (response?.data?.success) {
                form.reset();

                closeModal();
                setLoading(false);
            }
            if (response?.error?.data?.message) {
                Swal.fire({
                    icon: "error", title: "Oops...", text: `${response?.error?.data?.message}`,
                });
                setLoading(false);
            }
        } catch (error) {
            Swal.fire({
                icon: "error", title: "Oops...", text: `${error?.message}`,
            });
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    const fileInputRef = useRef(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile.name);
        setImageFIle(selectedFile);
    };
    useEffect(() => {
        axios
            .get("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
            .then(function (response) {
                setCountryNames(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const handleChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };
    const handleJobType = (selectedOption) => {
        setJobType(selectedOption);
    };
    const handleWorkPlaceType = (selectedOption) => {
        setWorkplaceType(selectedOption);
    };
    const handleCategory = (selectedOption) => {
        setRole(selectedOption);
    };
    const handleNextOption = () => {
        setNextOption("AddJobOfferModalTwo");
    };

    return (<div className={` ${styles.addJob_wrapper}`}>
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
                        style={{marginBottom: "40px"}}
                    >
                        <div
                            // onSubmit={handleSubmit}
                            className="w-100 player_job_form_wrapper mt-0"
                        >

                            {nextOption === "AddJobOfferModal" && (<AddJobOfferModal
                                fileInputRef={fileInputRef}
                                handleFileChange={handleFileChange}
                                image={image}
                                selectedCountry={selectedCountry}
                                countryNames={countryNames}
                                options={options}
                                WorkplaceOptions={WorkplaceOptions}
                                categoryOptions={categoryOptions}
                            />)}

                            {nextOption === "AddJobOfferModalTwo" && (<AddJobOfferModalTwo/>)}


                            {/*<button*/}
                            {/*  className="submit_now_btn w-100 m-0"*/}
                            {/*  // onClick={onHide}*/}
                            {/*  type="submit"*/}
                            {/*  disabled={loading || isLoading}*/}
                            {/*>*/}
                            {/*  {loading ? "Adding..." : "Add Job"}*/}
                            {/*</button> */}

                            {nextOption === "AddJobOfferModal" ? (<button
                                onClick={handleNextOption}
                                className="submit_now_btn w-100 m-0"
                                // onClick={onHide}
                                type="button"
                                // disabled={loading || isLoading}
                            >
                                Next
                            </button>) : ''}

                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>);
};

export default AddJobOffer;
