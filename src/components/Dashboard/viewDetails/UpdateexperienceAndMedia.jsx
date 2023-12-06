import insta from '../../../assets/insta1.png'
import fb from '../../../assets/fb1.png'
import Twitter from '../../../assets/twiter1.png'
import plus from '../../../assets/plus3.png'
import { useState } from 'react';


const UpdateexperienceAndMedia = () => {
    const [formData, setFormData] = useState({
        experiences: [
            { startYear: '', endYear: '' },
        ],
    });
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = [...formData.experiences];
        updatedExperiences[index] = {
            ...updatedExperiences[index],
            [name]: value,
        };
        setFormData((prevData) => ({
            ...prevData,
            experiences: updatedExperiences,
        }));
    };

    const handleAddMore = () => {
        setFormData((prevData) => ({
            ...prevData,
            experiences: [...prevData.experiences, { startYear: '', endYear: '' }],
        }));
    };
    return (
        <>
            <div className="container" >
                <div className="experience_wrapper">
                    <div className="row personal_info_edit_wrapper">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="editpersonal_info experience_update_wrapper">
                                <p>Experience</p>
                                <div className="w-100">
                                    <label htmlFor='exampleFormControlInput1' className="form-label">
                                        Club
                                    </label>
                                    <input type="text" className="form-control" id='exampleFormControlInput1' placeholder='Cleveland Cavaliers' />
                                </div>
                                {formData.experiences.map((experience, index) => (
                                    <div className="row" key={index}>
                                        <div className="col-lg-6">
                                            <div className="w-100">
                                                <label htmlFor={`startYear${index}`} className="form-label">
                                                    Start Year
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`startYear${index}`}
                                                    name="startYear"
                                                    placeholder="2003"
                                                    value={experience.startYear}
                                                    onChange={(e) => handleChange(e, index)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="w-100">
                                                <label htmlFor={`endYear${index}`} className="form-label">
                                                    End Year
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`endYear${index}`}
                                                    name="endYear"
                                                    placeholder="2008"
                                                    value={experience.endYear}
                                                    onChange={(e) => handleChange(e, index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button className='add_more_btn' onClick={handleAddMore}>
                                            <span>Add more</span>
                                            <img src={plus} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="editpersonal_info experience_update_wrapper1">
                                <p>Social Media</p>
                                <div className="position-relative">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                                    <div className='form_icons ' style={{ top: "46px" }}>
                                        <img className='mt-0' src={insta} alt="user" />
                                    </div>
                                    <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="johnkawalski05" />
                                </div>
                                <div className="position-relative">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Facebook</label>
                                    <div className='form_icons ' style={{ top: "46px" }}>
                                        <img className='mt-0' src={fb} alt="user" />
                                    </div>
                                    <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="johnkawalski05" />
                                </div>
                                <div className="position-relative">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Twitter</label>
                                    <div className='form_icons ' style={{ top: "46px" }}>
                                        <img className='mt-0' src={Twitter} alt="user" />
                                    </div>
                                    <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="johnkawalski05" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateexperienceAndMedia;