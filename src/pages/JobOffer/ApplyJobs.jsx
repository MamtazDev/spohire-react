import auser from '../../assets/auser.png';
import region from '../../assets/aregion.png';
import dob from '../../assets/adob.png';
import position from '../../assets/afullname.png';
import weight from '../../assets/aweight.png';
import height from '../../assets/aheight.png';
import salary from '../../assets/asalary.png';
import language from '../../assets/alanguage.png';
import { useState } from 'react';

const formFields = [
    { label: 'Your Name', type: 'text', key: 'name', icon: auser, placeholder: 'Enter your name' },
    { label: 'Region', type: 'text', key: 'region', icon: region, placeholder: 'Enter your region' },
    { label: 'Birth Date', type: 'date', key: 'birthDate', icon: dob, placeholder: 'Enter your birth date' },
    { label: 'Playing Position', type: 'text', key: 'playingPosition', icon: position, placeholder: 'Enter your playing position' },
    { label: 'Your Weight', type: 'number', key: 'weight', icon: weight, placeholder: 'Enter your weight' },
    { label: 'Your Height', type: 'number', key: 'height', icon: height, placeholder: 'Enter your height' },
    { label: 'Expected Salary', type: 'number', key: 'expectedSalary', icon: salary, placeholder: 'Numerical digit only' },
    { label: 'Language', type: 'text', key: 'language', icon: language, placeholder: 'Enter your language' },
];

const ApplyJobs = () => {
    const [formData, setFormData] = useState({
        name: '',
        region: '',
        birthDate: '',
        playingPosition: '',
        weight: '',
        height: '',
        expectedSalary: '',
        language: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log()
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data submitted:', formData);
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{
                            maxWidth: '1240px', width: "100%", margin: "auto"
                        }}>
                            <div className="modal-header p-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title fs-5 text-center apply_jobs_title" id="exampleModalLabel">Apply for the job</h1>
                            <div className="modal-body text-start">
                                <div className="container">

                                    <div className="row" >
                                        {formFields.map((field) => (
                                            <div className="col-lg-6" key={field.key}>
                                                <div className="mb-4 position-relative">
                                                    <label htmlFor={field.key} className="form-label">
                                                        {field.label}
                                                    </label>
                                                    <div className='form_icons'>
                                                        <img className='mt-0' src={field.icon} alt="user" />
                                                    </div>
                                                    <input
                                                        type={field.type}
                                                        className="form-control ps-5"
                                                        id={field.key}
                                                        name={field.key}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.key]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center">
                                <button type="submit" className="btn btn-primary apply_now_btn" style={{ maxWidth: "568px", width: "100%" }}>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
};

export default ApplyJobs;