import p1 from '../../../assets/p1.png';
import p2 from '../../../assets/p2.png';
import salary from '../../../assets/asalary.png';
import location from '../../../assets/location.png';
import language from '../../../assets/alanguage.png';

const formFields = [
    {
        label: 'Add Title',
        placeholder: 'Add job title',
        iconName: p1,
    },
    {
        label: 'Playing Position',
        placeholder: 'Playing position',
        iconName: p2,
    },
    {
        label: 'Offered Salary',
        placeholder: 'Numerical digit only',
        iconName: salary,
    },
    {
        label: 'Location',
        placeholder: 'Select your location',
        iconName: location,
    },
    {
        label: 'Language',
        placeholder: 'Select your region',
        iconName: language,
    },
];

const PlayerJobForm = () => {
    return (
        <div>

            <div className="personal_info_edit_wrapper">
                <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }} >
                    <div className="w-100 player_job_form_wrapper">
                        {formFields.map((field, index) => (
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
        </div>
    );
};

export default PlayerJobForm;