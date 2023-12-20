import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import salary from "../../../assets/asalary.png";
import location from "../../../assets/location.png";
import language from "../../../assets/alanguage.png";
import { useState } from "react";
import { useAddJobMutation } from "../../../features/job/jobApi";
import Swal from "sweetalert2";

const formFields = [
  {
    label: "Add Title",
    placeholder: "Add job title",
    iconName: p1,
    name: "title",
  },
  {
    label: "Playing Position",
    placeholder: "Playing position",
    iconName: p2,
    name: "position",
  },
  {
    label: "Offered Salary",
    placeholder: "Numerical digit only",
    iconName: salary,
    name: "salary",
  },
  {
    label: "Location",
    placeholder: "Select your location",
    iconName: location,
    name: "location",
  },
  {
    label: "Language",
    placeholder: "Select your region",
    iconName: language,
    name: "language",
  },
];

const PlayerJobForm = ({ closeModal }) => {
  //   const [formData, setFormData] = useState({
  //     title: "",
  //     position: "",
  //     salary: "",
  //     location: "",
  //     language: "",
  //   });

  //   const handleInputChange = (fieldName, value) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [fieldName]: value,
  //     }));
  //   };

  const [addJob, { isLoading }] = useAddJobMutation();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const title = form.title.value;
    const position = form.position.value;
    const salary = form.salary.value;
    const location = form.location.value;
    const language = form.language.value;
    const role = "Player";

    const data = {
      role,
      job_title: title,
      job_position: position,
      offered_salary: Number(salary),
      job_location: location,
      language: language,
    };

    try {
      const response = await addJob(data);

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

  return (
    // <div>

    //     <div className="personal_info_edit_wrapper">
    //         <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }} >
    //             <div className="w-100 player_job_form_wrapper">
    //                 {formFields.map((field, index) => (
    //                     <div key={index} className="position-relative text-start">
    //                         <label htmlFor={`exampleFormControlInput${index + 1}`} className="form-label">
    //                             {field.label}
    //                         </label>
    //                         <div className='form_icons' style={{ top: "44px" }}>
    //                             <img className='mt-0' src={field.iconName} alt="user" />
    //                         </div>
    //                         <input
    //                             type="email"
    //                             className="form-control ps-5"
    //                             id={`exampleFormControlInput${index + 1}`}
    //                             placeholder={field.placeholder}
    //                         />
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //         <button className='submit_now_btn w-100 m-0'>
    //             Submit Now
    //         </button>
    //     </div>
    // </div>
    <form onSubmit={handleSubmit}>
      <div className="personal_info_edit_wrapper">
        <div
          className="d-flex flex-column align-items-start gap-3"
          style={{ marginBottom: "40px" }}
        >
          <div className="w-100 player_job_form_wrapper">
            {formFields.map((field, index) => (
              <div key={index} className="position-relative text-start">
                <label
                  htmlFor={`exampleFormControlInput${index + 1}`}
                  className="form-label"
                >
                  {field.label}
                </label>
                <div className="form_icons" style={{ top: "44px" }}>
                  <img className="mt-0" src={field.iconName} alt="user" />
                </div>
                <input
                  type={field?.name === "salary" ? "number" : "text"}
                  min="1"
                  className="form-control ps-5"
                  id={`exampleFormControlInput${index + 1}`}
                  placeholder={field.placeholder}
                  name={field.name}
                  //   onChange={(e) =>
                  //     handleInputChange(field.name, e.target.value)
                  //   }
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="submit_now_btn w-100 m-0">
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default PlayerJobForm;
