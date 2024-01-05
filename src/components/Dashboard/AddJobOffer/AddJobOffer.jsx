// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
// import { Modal } from "react-bootstrap";
// import styles from "./Modal.module.css";
// import brows from "../../../assets/brows1.png";
// import region from "../../../assets/aregion.png";
// import salary from "../../../assets/asalary.png";
// import "./AddJobOffer.css";
// import { useAddJobMutation } from "../../../features/job/jobApi";
// import Swal from "sweetalert2";
// import axios from "axios";

// const options = [
//   { value: "Full-time", label: "Full-time" },
//   { value: "Part-time", label: "Part-time" },
//   { value: "Contract", label: "Contract" },
//   { value: "Temporary", label: "Temporary" },
// ];

// const categoryOptions = [
//   { value: "Coach administration", label: "Coach administration" },
//   { value: "Marketing", label: "Marketing" },
//   { value: "Betting", label: "Betting" },
//   { value: "Customer service", label: "Customer service" },
//   { value: "Manager", label: "Manager" },
//   { value: "Agent", label: "Agent" },
//   { value: "Journalist", label: "Journalist" },
//   { value: "Scout", label: "Scout" },
//   { value: "Referee", label: "Referee" },
// ];

// const WorkplaceOptions = [
//   { value: "On-site", label: "On-site" },
//   { value: "Hybrid", label: "Hybrid" },
//   { value: "Remote", label: "Remote" },
// ];

// const AddJobOffer = ({ onHide, isModalOpen, closeModal }) => {
//   const [image, setImage] = useState("");
//   const [imageFile, setImageFIle] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [workplaceType, setWorkplaceType] = useState("");
//   const [countryNames, setCountryNames] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [role, setRole] = useState("");
//   const [jobType, setJobType] = useState("");

//   const [addJob, { isLoading }] = useAddJobMutation();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   const form = e.target;

//   //   const title = form.title.value;
//   //   const company = form.company.value;
//   //   const club_logo = imageFile;
//   //   const country = form.country.value;
//   //   const job_location = form.job_location.value;
//   //   const salary = form.salary.value;
//   //   const description = form.description.value;
//   //   const language = form.description.value;

//   //   console.log(title,company,club_logo,country,job_location,salary,description,language)
//   //   const fromData = new FormData();

//   //   fromData.append("job_title", title);
//   //   fromData.append("company", company);
//   //   fromData.append("club_logo", club_logo);
//   //   fromData.append("workplaceType", workplaceType);
//   //   fromData.append("country", country?.value);
//   //   fromData.append("job_location", job_location);
//   //   fromData.append("language", language);
//   //   fromData.append("role", role);
//   //   fromData.append("jobType", jobType);
//   //   fromData.append("salary", salary);
//   //   fromData.append("description", description);

//   //   try {
//   //     const response = await addJob(fromData);
//   //     if (response?.data?.success) {
//   //       form.reset();

//   //       closeModal();
//   //       setLoading(false);
//   //     }
//   //     if (response?.error?.data?.message) {
//   //       Swal.fire({
//   //         icon: "error",
//   //         title: "Oops...",
//   //         text: `${response?.error?.data?.message}`,
//   //       });
//   //       setLoading(false);
//   //     }
//   //   } catch (error) {
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: `${error?.message}`,
//   //     });
//   //     setLoading(false);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;

//     const title = form.title.value;
//     const company = form.company.value;
//     const club_logo = imageFile;
//     const country = selectedCountry?.value;
//     const job_location = form.job_location.value;
//     const salaryValue = form.salary.value;
//     const description = form.description.value;
//     // const selectedJobType = form.jobType.value;
//     console.log(workplaceType, jobType)

//     const fromData = new FormData();

//     fromData.append("job_title", title);
//     fromData.append("company", company);
//     fromData.append("club_logo", club_logo);
//     fromData.append("workplaceType", workplaceType);
//     fromData.append("country", country);
//     fromData.append("job_location", job_location);
//     // fromData.append("language", language);
//     fromData.append("role", role);
//     fromData.append("jobType", jobType);
//     fromData.append("salary", salaryValue);
//     fromData.append("description", description);

//     try {
//       const response = await addJob(fromData);
//       if (response?.data?.success) {
//         form.reset();
//         closeModal();
//         setLoading(false);
//       } else if (response?.data?.message) {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: `${response?.data?.message}`,
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Job creation failed.",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: `${error?.message}`,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     // console.log("Selected File:", selectedFile.name);
//     setImage(selectedFile.name);
//     setImageFIle(selectedFile);
//   };

//   useEffect(() => {
//     axios
//       .get(
//         "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
//       )
//       .then(function (response) {
//         setCountryNames(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   const handleChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setRole(selectedOption)
//     setWorkplaceType(selectedOption)
//   };
//   return (
//     <div className={` ${styles.addJob_wrapper}`}>
//       <Modal
//         centered
//         show={isModalOpen}
//         onHide={onHide}
//         className="modal_width1"
//       >
//         <Modal.Header closeButton className="p-0">
//           <Modal.Title className="text-center"></Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="p-0 add_job_offer_admin">
//           <div className="personal_info_edit_wrapper add_job_offer">
//             <div
//               className="d-flex flex-column align-items-start gap-3"
//               style={{ marginBottom: "44px" }}
//             >
//               <form onSubmit={handleSubmit}
//                 className="w-100 player_job_form_wrapper">
//                 <div className="text-center modal_title">Add Job offer</div>
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}
//                     >
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Job Title
//                       </label>
//                       <div className="form_icons" style={{ top: "36px" }}>
//                         <img className="mt-0" src={region} alt="title" />
//                       </div>
//                       <input
//                         type="text"
//                         className="form-control ps-5"
//                         id="exampleFormControlInput1"
//                         placeholder="Enter Announcement Title"
//                         name="title"
//                       />
//                     </div>
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}
//                     >
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Company Logo
//                       </label>
//                       <input
//                         type="file"
//                         className="form-control"
//                         id="exampleFormControlInput1"
//                         ref={fileInputRef}
//                         onChange={handleFileChange}
//                         style={{ display: "none" }} // Hide the default file input
//                       />
//                       <div className="form_icons" style={{ top: "36px" }}>
//                         <img className="mt-0" src={brows} alt="user" />
//                       </div>
//                       <input
//                         type="text"
//                         onClick={() => fileInputRef.current.click()}
//                         className="form-control ps-5"
//                         value={image}
//                         style={{ cursor: "pointer" }}
//                         id="exampleFormControlInput1"
//                         placeholder="Brows Here"
//                       />
//                     </div>

//                     {/* SELECT */}
//                     <div className="position-relative text-start ">
//                       <div className="row">
//                         <div className="col-lg-6 job_location_select">
//                           <label
//                             htmlFor="exampleFormControlInput1"
//                             className="form-label"
//                           >
//                             Country
//                           </label>
//                           <select
//                             className="form-select"
//                             aria-label="Default select example"
//                             style={{
//                               height: "46px",
//                               backgroundColor: "",
//                               border: "1px solid #F0F0F0",
//                             }}
//                             name="country"
//                           >
//                             {countryNames.map((name, index) => (
//                               <option
//                                 value={name?.name}
//                                 className=""
//                                 key={index}
//                               >
//                                 {name.name}
//                               </option>
//                             ))}
//                           </select>

//                         </div>
//                         <div className="col-lg-6">
//                           <div className="position-relative text-start "
//                             style={{ marginBottom: "32px" }}>
//                             <label
//                               htmlFor="exampleFormControlInput1"
//                               className="form-label">
//                               City
//                             </label>


//                             <input
//                               type="text"
//                               className="form-control"
//                               id="exampleFormControlInput1"
//                               placeholder="Your city"
//                               name="job_location"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* SELECT */}
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}>
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Job type
//                       </label>

//                       <select
//                         className="form-select"
//                         aria-label="Default select example"
//                         style={{ padding: "0 14px", height: "44px" }}
//                         name="country"
//                         onChange={(event) => setJobType(event.target.value)}
//                       >
//                         {options.map((name, index) => (
//                           <option
//                             value={name?.value}
//                             className=""
//                             key={index}
//                           >
//                             {name.value}
//                           </option>
//                         ))}
//                       </select>

//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}
//                     >
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Company
//                       </label>
//                       <div className="form_icons" style={{ top: "36px" }}>
//                         <img className="mt-0" src={region} alt="user" />
//                       </div>
//                       <input
//                         type="text"
//                         className="form-control ps-5"
//                         id="exampleFormControlInput1"
//                         placeholder="Enter your company"
//                         name="company"
//                       />
//                     </div>
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}
//                     >
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Workplace Type
//                       </label>

//                       <select
//                         className="form-select"
//                         aria-label="Default select example"
//                         style={{ padding: "0 14px", height: "44px" }}
//                         name="country"
//                         onChange={(event) => setWorkplaceType(event.target.value)}
//                       >
//                         {WorkplaceOptions.map((name, index) => (
//                           <option
//                             value={name?.value}
//                             className=""
//                             key={index}
//                           >
//                             {name.value}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}
//                     >
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <label
//                             htmlFor="exampleFormControlInput1"
//                             className="form-label"
//                           >
//                             Category
//                           </label>
//                           <select
//                             className="form-select  "
//                             aria-label="Default select example"
//                             style={{ padding: "0 14px", height: "44px" }}
//                             name="country"
//                             onChange={handleChange}
//                           >
//                             {categoryOptions.map((name, index) => (
//                               <option
//                                 value={name?.value}
//                                 className=""
//                                 key={index}
//                               >
//                                 {name.value}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                         <div className="col-lg-6">
//                           <label
//                             htmlFor="exampleFormControlInput1"
//                             className="form-label"
//                           >
//                             Language
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="exampleFormControlInput1"
//                             placeholder="Enter your Language"
//                             name="company"

//                           />
//                         </div>
//                       </div>

//                     </div>
//                     <div
//                       className="position-relative text-start "
//                       style={{ marginBottom: "32px" }}>
//                       <label
//                         htmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Salary
//                       </label>
//                       <div className="form_icons" style={{ top: "36px" }}>
//                         <img className="mt-0" src={salary} alt="user" />
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control ps-5"
//                         id="exampleFormControlInput1"
//                         placeholder="Numerical digit only"

//                         name="salary"
//                         min="1"
//                       />
//                     </div>
//                   </div>
//                   <div className="position-relative text-start">
//                     <div className="mb-3">
//                       <label
//                         hytmlFor="exampleFormControlInput1"
//                         className="form-label"
//                       >
//                         Description
//                       </label>
//                       <div class="input-group mb-3">
//                         <textarea
//                           type="text"
//                           style={{ height: "65px" }}
//                           className="form-control"
//                           placeholder="Enter Your Description...."
//                           aria-label="Username"
//                           aria-describedby="basic-addon1"
//                           name="description"

//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="submit_now_btn w-100 m-0"
//                   // onClick={onHide}
//                   type="submit"
//                   disabled={loading || isLoading}
//                 >
//                   {loading ? "Adding..." : "Add Job"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default AddJobOffer;


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

const options = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "Temporary", label: "Temporary" },
];

const categoryOptions = [
  { value: "Coach administration", label: "Coach administration" },
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
  { value: "Remote", label: "Remote" },
];

const AddJobOffer = ({ onHide, isModalOpen, closeModal }) => {
  const [image, setImage] = useState("");
  const [imageFile, setImageFIle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [workplaceType, setWorkplaceType] = useState("");


  const [countryNames, setCountryNames] = useState([]);
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");

  const [addJob, { isLoading }] = useAddJobMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

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

    try {
      const response = await addJob(fromData);
      if (response?.data?.success) {
        form.reset();

        closeModal();
        setLoading(false);
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
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

  return (
    <div className={` ${styles.addJob_wrapper}`}>
      <Modal
        centered
        show={isModalOpen}
        onHide={onHide}
        className="modal_width1"
      >
        <Modal.Header closeButton className="p-0">
          <Modal.Title className="text-center"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 add_job_offer_admin">
          <div className="personal_info_edit_wrapper add_job_offer">
            <div
              className="d-flex flex-column align-items-start gap-3"
              style={{ marginBottom: "40px" }}
            >
              <form
                onSubmit={handleSubmit}
                className="w-100 player_job_form_wrapper"
              >
                <div className="text-center modal_title">Add Job offer</div>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job Title
                      </label>
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="title" />
                      </div>
                      <input
                        type="text"
                        className="form-control ps-5"
                        id="exampleFormControlInput1"
                        placeholder="Enter Announcement Title"
                        name="title"
                        required
                      />
                    </div>
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company Logo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="exampleFormControlInput1"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }} // Hide the default file input
                      />
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={brows} alt="user" />
                      </div>
                      <input
                        type="text"
                        onClick={() => fileInputRef.current.click()}
                        className="form-control ps-5"
                        value={image}
                        style={{ cursor: "pointer" }}
                        id="exampleFormControlInput1"
                        placeholder="Brows Here"
                      />
                    </div>

                    {/* SELECT */}
                    <div className="position-relative text-start ">
                      <div className="row">
                        <div className="col-lg-6 job_location_select">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Country
                          </label>

                          <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{
                              minHeight: "44px",
                              width: "100%",
                              backgroundColor: "#FFFFFF",
                              padding: "0 14px",
                            }}
                            name="country"
                            value={selectedCountry}
                            onChange={(event) => handleChange(event.target.value)}
                          >
                            {countryNames.map((country, index) => (
                              <option
                                value={country.name}
                                className=""
                                key={index}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>


                        </div>
                        <div className="col-lg-6">
                          <div
                            className="position-relative text-start "
                            style={{ marginBottom: "32px" }}
                          >
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              City
                            </label>

                            <div className="form_icons" style={{ top: "36px" }}>
                              <img className="mt-0" src={region} alt="title" />
                            </div>
                            <input
                              type="text"
                              className="form-control ps-5"
                              id="exampleFormControlInput1"
                              placeholder="Your city"
                              name="job_location"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* SELECT */}
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job type
                      </label>

                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{
                          minHeight: "44px",
                          width: "100%",
                          backgroundColor: "#FFFFFF",
                          padding: "0 14px",
                        }}
                        name="jobType"
                        value={jobType}
                        onChange={(event) => handleJobType(event.target.value)}
                      >
                        {options.map((country, index) => (
                          <option
                            value={country.value}
                            className=""
                            key={index}
                          >
                            {country.value}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company
                      </label>
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="user" />
                      </div>
                      <input
                        type="text"
                        className="form-control ps-5"
                        id="exampleFormControlInput1"
                        placeholder="Enter your company"
                        name="company"
                        required
                      />
                    </div>
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Workplace Type
                      </label>

                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{
                          minHeight: "44px",
                          width: "100%",
                          backgroundColor: "#FFFFFF",
                          padding: "0 14px",
                        }}
                        name="workplaceType"
                        value={workplaceType}
                        onChange={(event) => handleWorkPlaceType(event.target.value)}
                      >
                        {WorkplaceOptions.map((country, index) => (
                          <option
                            value={country.value}
                            className=""
                            key={index}
                          >
                            {country.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Category
                          </label>
                          {/* <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={categoryOptions}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                        onChange={(selectedOption) =>
                          setRole(selectedOption.value)
                        }
                      /> */}
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{
                              minHeight: "44px",
                              width: "100%",
                              backgroundColor: "#FFFFFF",
                              padding: "0 14px",
                            }}
                            name="workplaceType"
                            value={role}
                            onChange={(event) => handleCategory(event.target.value)}
                          >
                            {categoryOptions.map((category, index) => (
                              <option
                                value={category.value}
                                className=""
                                key={index}
                              >
                                {category.value}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Language
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter language"
                            name="language"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Salary
                      </label>
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={salary} alt="user" />
                      </div>
                      <input
                        type="number"
                        className="form-control ps-5"
                        id="exampleFormControlInput1"
                        placeholder="Numerical digit only"
                        required
                        name="salary"
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="position-relative text-start">
                    <div className="mb-3">
                      <label
                        hytmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <div class="input-group mb-3">
                        <textarea
                          type="text"
                          style={{ height: "65px" }}
                          className="form-control"
                          placeholder="Enter Your Description...."
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="description"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="submit_now_btn w-100 m-0"
                  // onClick={onHide}
                  type="submit"
                  disabled={loading || isLoading}
                >
                  {loading ? "Adding..." : "Add Job"}
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddJobOffer;
