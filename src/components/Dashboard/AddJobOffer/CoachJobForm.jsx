import p2 from '../../../assets/p2.png';
import salary from '../../../assets/asalary.png';
import region from '../../../assets/aregion.png';

const FormFields = [
    {
        label: 'Formation',
        placeholder: 'Enter Your Formation',
        iconName: p2,
    },
    {
        label: 'Offered Salary',
        placeholder: 'Numerical digit only',
        iconName: salary,
    },
    {
        label: 'Region',
        placeholder: 'Select your region',
        iconName: region,
    },
];

const CoachJobForm = () => {
    return (
        <>
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
                                    type="email"
                                    className="form-control ps-5"
                                    id={`exampleFormControlInput${index + 1}`}
                                    placeholder={field.placeholder}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoachJobForm;