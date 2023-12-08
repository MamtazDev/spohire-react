import p2 from '../../../assets/p2.png';
import salary from '../../../assets/asalary.png';
import region from '../../../assets/aregion.png';
import { useState } from 'react';

const FormFields = [
    {
        label: 'Formation',
        placeholder: 'Enter Your Formation',
        iconName: p2,
        name: "formation",
        type: "text"
    },
    {
        label: 'Offered Salary',
        placeholder: 'Numerical digit only',
        iconName: salary,
        name: "offeredSalary",
        type: "text"
    },
    {
        label: 'Region',
        placeholder: 'Select your region',
        iconName: region,
        name: "region",
        type: "text"
    },
];

const CoachJobForm = () => {

    const [formData, setFormData] = useState({
        formation: '',
        offeredSalary: '',
        region: ''

    });
    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="personal_info_edit_wrapper">
                <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }}>
                    <div className="w-100 player_job_form_wrapper">
                        {FormFields.map((field, index) => (
                            <div key={index} className="position-relative text-start">
                                <label htmlFor={`exampleFormControlInput${index + 1}`} className="form-label">
                                    {field.label}
                                </label>
                                <div className='form_icons' style={{ top: "44px" }}>
                                    <img className='mt-0' src={field.iconName} alt="user" />
                                </div>
                                <input
                                    type={field.type}
                                    className="form-control ps-5"
                                    id={`exampleFormControlInput${index + 1}`}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className='submit_now_btn w-100 m-0'>
                    Submit Now
                </button>
            </div>
        </form>
    );
};

export default CoachJobForm;