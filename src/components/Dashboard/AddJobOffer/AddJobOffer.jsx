/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";
import brows from "../../../assets/brows1.png";
import region from "../../../assets/aregion.png";
import dob from "../../../assets/adob.png";
import position from "../../../assets/afullname.png";
import weight from "../../../assets/aweight.png";
import height from "../../../assets/aheight.png";
import salary from "../../../assets/asalary.png";
import language from "../../../assets/alanguage.png";
import "./AddJobOffer.css";
import Select from "react-select";
import { useAddJobMutation } from "../../../features/job/jobApi";

const options = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "Temporary", label: "Temporary" },
];

const categoryOptions = [
  { value: "Player", label: "Player" },
  { value: "Coach", label: "Coach" },
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

  const [workplaceType, setWorkplaceType] = useState("");
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");

  const [addJob, { isLoading }] = useAddJobMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const title = form.title.value;
    const jobLocation = form.jobLocation.value;
    const company = form.company.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const club_logo = imageFile;

    const fromData = new FormData();

    fromData.append("job_title", title);
    fromData.append("club_logo", club_logo);
    fromData.append("company", company);
    fromData.append("job_location", jobLocation);
    fromData.append("workplaceType", workplaceType);
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
    // console.log("Selected File:", selectedFile.name);
    setImage(selectedFile.name);
    setImageFIle(selectedFile);
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
        <Modal.Body className="p-0">
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
                    <div
                      className="position-relative text-start "
                      style={{ marginBottom: "32px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Employer Location
                      </label>
                      {/* <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                      /> */}
                      <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="user" />
                      </div>
                      <input
                        type="text"
                        className="form-control ps-5"
                        id="exampleFormControlInput1"
                        placeholder="Enter Employer location"
                        name="jobLocation"
                        required
                      />
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
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                        onChange={(selectedOption) =>
                          setJobType(selectedOption.value)
                        }
                      />
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
                      {/* <div className="form_icons" style={{ top: "36px" }}>
                        <img className="mt-0" src={region} alt="user" />
                      </div>
                      <input
                        type="text"
                        className="form-control ps-5"
                        id="exampleFormControlInput1"
                        placeholder="Select your region"
                        name="workplaceType"
                        required
                      /> */}
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={WorkplaceOptions}
                        placeholder="Select Workplace type"
                        style={{ padding: "12px 14px", height: "40px" }}
                        onChange={(selectedOption) =>
                          setWorkplaceType(selectedOption.value)
                        }
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
                        Category
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={categoryOptions}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                        onChange={(selectedOption) =>
                          setRole(selectedOption.value)
                        }
                      />
                      {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Select your region" /> */}
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
                  {loading ? "Creating..." : "Create"}
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
