import auser from "../../assets/auser.png";
import region from "../../assets/aregion.png";
import dob from "../../assets/adob.png";
import position from "../../assets/afullname.png";
import weight from "../../assets/aweight.png";
import height from "../../assets/aheight.png";
import salary from "../../assets/asalary.png";
import language from "../../assets/alanguage.png";
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
    label: "Region",
    type: "text",
    key: "region",
    icon: region,
    placeholder: "Enter your region",
  },
  {
    label: "Birth Date",
    type: "date",
    key: "birthDate",
    icon: dob,
    placeholder: "Enter your birth date",
  },
  {
    label: "Playing Position",
    type: "text",
    key: "playingPosition",
    icon: position,
    placeholder: "Enter your playing position",
  },
  {
    label: "Your Weight",
    type: "number",
    key: "weight",
    icon: weight,
    placeholder: "Enter your weight",
  },
  {
    label: "Your Height",
    type: "number",
    key: "height",
    icon: height,
    placeholder: "Enter your height",
  },
  {
    label: "Expected Salary",
    type: "number",
    key: "expectedSalary",
    icon: salary,
    placeholder: "Numerical digit only",
  },
  {
    label: "Language",
    type: "text",
    key: "language",
    icon: language,
    placeholder: "Enter your language",
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

  return (
    <>
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
                      <div className="col-lg-6" key={field.key}>
                        <div className="mb-4 position-relative">
                          <label htmlFor={field.key} className="form-label">
                            {field.label}
                          </label>
                          <div className="form_icons">
                            <img className="mt-0" src={field.icon} alt="user" />
                          </div>
                          <input
                            type={field.type}
                            className="form-control ps-5"
                            id={field.key}
                            name={field.key}
                            placeholder={field.placeholder}
                            // value={formData[field.key]}
                            // onChange={handleChange}
                            required
                            min="1"
                          />
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
    </>
  );
};

export default ApplyJobs;
