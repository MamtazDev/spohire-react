import auser from "../../assets/auser.png";
import region from "../../assets/aregion.png";
import dob from "../../assets/adob.png";
import position from "../../assets/afullname.png";
import email from "../../assets/aemail.png";
import phone from "../../assets/aphone.png";
import salary from "../../assets/asalary.png";
import upload from "../../assets/aupload.png";
import { useRef, useState } from "react";
import { useApplyForTheJobMutation } from "../../features/job/jobApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const formFields = [
  {
    label: "Your Name",
    type: "text",
    key: "name",
    icon: auser,
    placeholder: "Enter your name",
  },
  {
    label: "Country",
    type: "text",
    key: "country",
    icon: region,
    placeholder: "Enter your Country",
  },
  {
    label: "Birth Date",
    type: "date",
    key: "birthDate",
    icon: dob,
    placeholder: "Enter your birth date",
  },
  {
    label: "Expected Salary",
    type: "number",
    key: "salary",
    icon: salary,
    placeholder: "Enter your Expected Salary",
  },
  {
    label: "Email",
    type: "email",
    key: "email",
    icon: email,
    placeholder: "Enter your Email",
  },
  {
    label: "Upload CV",
    type: "file",
    key: "cv",
    icon: upload,
    placeholder: "",
  },
  {
    label: "Phone",
    type: "number",
    key: "language",
    icon: phone,
    placeholder: "Enter your phone number",
  },
];

const ApplyJobs = ({ selectedJob }) => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     region: "",
  //     birthDate: "",
  //     playingPosition: "",
  //     weight: "",
  //     height: "",
  //     expectedSalary: "",
  //     language: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     console.log();
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const { user } = useSelector((state) => state.auth);

  const [applyForTheJob, { isLoading }] = useApplyForTheJobMutation();
  const [loading, setLoading] = useState(false);

  const closeButtonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(!user){

    // }

    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const region = form.region.value;
    const birth_date = form.birthDate.value;
    const playing_position = form.playingPosition.value;
    const weight = Number(form.weight.value);
    const height = Number(form.height.value);
    const expected_salary = form.expectedSalary.value;
    const language = form.language.value;
    const job = selectedJob;

    const data = {
      name,
      region,
      birth_date,
      playing_position,
      weight,
      height,
      expected_salary,
      language,
      job,
    };

    try {
      const response = await applyForTheJob(data);
      if (response?.data?.success) {
        form.reset();
        closeButtonRef?.current?.click();
        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: `${response?.data?.message}`,
        });

        // navigate("/dashboard/announcements");
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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];

    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      // Add additional logic if needed
    } else {
      // Handle invalid file type
      alert('Please select a PDF file.');
      fileInputRef.current.value = ''; // Clear the file input
    }
  };
  return (
    <div className="apply_jobs_modal">
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                maxWidth: "1240px",
                width: "100%",
                margin: "auto",
              }}
            >
              <div className="modal-header p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={closeButtonRef}
                ></button>
              </div>
              <h1
                className="modal-title fs-5 text-center apply_jobs_title"
                id="exampleModalLabel"
              >
                Apply for the job
              </h1>
              <div className="modal-body text-start">
                <div className="container">
                  <div className="row">
                    {formFields.map((field) => (
                      <div className={`${field.key == 'name' ? 'col-lg-12' : 'col-lg-6'}`} key={field.key}>
                        <div className="mb-4 position-relative">
                          <label htmlFor={field.key} className="form-label">
                            {field.label}
                          </label>
                          <div className="form_icons">
                            <img className="mt-0" src={field.icon} alt="user" />
                          </div>

                          {
                            field.type === "file" ?
                              <div>
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  style={{ display: 'none' }}
                                  accept=".pdf" // Specify accepted file types (PDF in this case)
                                  id="fileInput"
                                />
                                <input
                                  type="text"
                                  className="form-control ps-5"
                                  id="customFileInput"
                                  name="customFileInput"
                                  placeholder="Select a PDF file"
                                  onClick={() => fileInputRef.current.click()}
                                  value={selectedFile ? selectedFile.name : ''}
                                  readOnly
                                  style={{ background: "transparent" }}
                                />
                              </div> :
                              <input
                                type={field.type}
                                className="form-control ps-5"
                                id={field.key}
                                name={field.key}
                                placeholder={field.placeholder}
                                required
                                min="1"
                              />
                          }

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary apply_now_btn"
                  style={{ maxWidth: "568px", width: "100%" }}
                  disabled={loading || isLoading}
                >
                  {loading ? "Appling..." : "Apply Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyJobs;
