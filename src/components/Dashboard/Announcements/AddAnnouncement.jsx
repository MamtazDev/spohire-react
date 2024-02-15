/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import brows from '../../../assets/brows1.png';
import region from '../../../assets/aregion.png';
import salary from '../../../assets/asalary.png';
import AddJobOfferModal from "../AddJobOffer/AddJobOfferModal.jsx";
import AddJobOfferModalTwo from "../AddJobOffer/AddJobOfferModalTwo.jsx";
import CreateAnnouncemnetModal from "./CreateAnnouncemnetModal.jsx";
import axios from "axios";
import {useSelector} from "react-redux";
import {useAddJobMutation} from "../../../features/job/jobApi.js";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import PaymentProcess from "./PaymentProcess.jsx";

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


const AddAnnouncement = ({onHide, isModalOpen}) => {
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


    return (<div>
        <>
            {/*<Modal*/}
            {/*    centered*/}
            {/*    show={isModalOpen} onHide={onHide} className="modal_width">*/}
            {/*    <Modal.Header closeButton className='p-0'>*/}
            {/*        <Modal.Title>Add An Announcement</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body className='p-0'>*/}
            {/*        <div className="personal_info_edit_wrapper">*/}
            {/*            <div className="d-flex flex-column align-items-start gap-3" style={{marginBottom: "40px"}}>*/}
            {/*                <div className="w-100 player_job_form_wrapper">*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>*/}
            {/*                        <div className="form_icons" style={{top: "40px"}}>*/}
            {/*                            <img className="mt-0" src={region} alt="title"/>*/}
            {/*                        </div>*/}
            {/*                        <input type="text" className="form-control ps-5" id="exampleFormControlInput1"*/}
            {/*                               placeholder="Enter Announcement Title"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>*/}
            {/*                        <div className="form_icons" style={{top: "40px"}}>*/}
            {/*                            <img className="mt-0" src={region} alt="title"/>*/}
            {/*                        </div>*/}
            {/*                        <input type="text" className="form-control ps-5" id="exampleFormControlInput1"*/}
            {/*                               placeholder="Enter location"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>*/}
            {/*                        <div className="form_icons" style={{top: "40px"}}>*/}
            {/*                            <img className="mt-0" src={region} alt="title"/>*/}
            {/*                        </div>*/}
            {/*                        <input type="text" className="form-control ps-5" id="exampleFormControlInput1"*/}
            {/*                               placeholder="Status"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <label htmlFor="exampleFormControlInput1" className="form-label">Budget</label>*/}
            {/*                        <div className="form_icons" style={{top: "40px"}}>*/}
            {/*                            <img className="mt-0" src={salary} alt="title"/>*/}
            {/*                        </div>*/}
            {/*                        <input type="number" className="form-control ps-5" id="exampleFormControlInput1"*/}
            {/*                               placeholder="Numerical digit only"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>*/}
            {/*                        <input*/}
            {/*                            type="file"*/}
            {/*                            className="form-control"*/}
            {/*                            id="exampleFormControlInput1"*/}
            {/*                            ref={fileInputRef}*/}
            {/*                            onChange={handleFileChange}*/}
            {/*                            style={{display: 'none'}} // Hide the default file input*/}
            {/*                        />*/}
            {/*                        <div className="form_icons" style={{top: "40px"}}>*/}
            {/*                            <img className="mt-0" src={brows} alt="title"/>*/}
            {/*                        </div>*/}
            {/*                        <input type="email" onClick={() => fileInputRef.current.click()} value={image}*/}
            {/*                               className="form-control ps-5" id="exampleFormControlInput1"*/}
            {/*                               placeholder="Brows here" style={{cursor: "pointer"}}/>*/}
            {/*                    </div>*/}
            {/*                    <div className="position-relative text-start">*/}
            {/*                        <div className="mb-3">*/}
            {/*                            <label hytmlFor="exampleFormControlInput1"*/}
            {/*                                   className="form-label">Description</label>*/}
            {/*                            <div className="input-group mb-3">*/}
            {/*                                <textarea type="text" className="form-control" placeholder="Description...."*/}
            {/*                                          aria-label="Username" aria-describedby="basic-addon1"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer className='border-0 p-0'>*/}
            {/*        <button className='submit_now_btn w-100 m-0' onClick={onHide}>*/}
            {/*            Submit Now*/}
            {/*        </button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </>
        <Modal
            centered
            show={isModalOpen}
            onHide={onHide}
            className="modal_width1"
        >
            {/*closeButton*/}
            {nextOption === "AddJobOfferModal" && (
                <Modal.Header className="justify-content-center">
                    <Modal.Title>
                        Create Announcement
                    </Modal.Title>
                </Modal.Header>
            )}

            {nextOption === "AddJobOfferModalTwo" && (
                <Modal.Header className=" justify-content-start container" style={{maxWidth: "750px", width: "100%"}}>
                    <Modal.Title className={"fs-3 text-black fw-bold text-start"}>
                        Payment Process
                    </Modal.Title>
                </Modal.Header>
            )}

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

                            {nextOption === "AddJobOfferModal" && (<CreateAnnouncemnetModal
                                fileInputRef={fileInputRef}
                                handleFileChange={handleFileChange}
                                image={image}
                                selectedCountry={selectedCountry}
                                countryNames={countryNames}
                                options={options}
                                WorkplaceOptions={WorkplaceOptions}
                                categoryOptions={categoryOptions}
                            />)}

                            {nextOption === "AddJobOfferModalTwo" && (<PaymentProcess/>)}

                            {nextOption === "AddJobOfferModal" ? (
                                <div className={"d-flex justify-content-center"}>

                                    <button
                                        onClick={handleNextOption}
                                        className="submit_now_btn m-0"
                                        // onClick={onHide}
                                        type="button"
                                        // disabled={loading || isLoading}
                                        style={{maxWidth: '568px',  width: '100%'}}
                                    >
                                        Next
                                    </button>
                                </div>
                            ) : ''}

                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>);
};

export default AddAnnouncement;