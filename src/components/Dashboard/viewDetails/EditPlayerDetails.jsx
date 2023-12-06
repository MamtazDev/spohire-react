/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./ViewDetails.css";
import profileImage from "../../../assets/profile_jobOffer.png";
import plus4 from "../../../assets/plus4.png";
import UpdateexperienceAndMedia from "./UpdateexperienceAndMedia";
import EditGallary from "./EditGallary";
import { useState } from "react";

// data
const inputFieldData = [
    {
        lable: "Name",
        placeholderText: "Your name"
    },
    {
        lable: "Date of Birth",
        placeholderText: "DD-MM-YYYY"
    },
    {
        lable: "Age",
        placeholderText: "Your Age"
    },
    {
        lable: "Nationality",
        placeholderText: "Your Nationality"
    },
    {
        lable: "Position",
        placeholderText: "Your Position"
    },
    {
        lable: "Dominant Hand",
        placeholderText: "Your Dominant Hand"
    },
    {
        lable: "Height",
        placeholderText: "You Height"
    },
    {
        lable: "Weight",
        placeholderText: "Your Weight"
    },
    {
        lable: "Race",
        placeholderText: "Your Race"
    },
]

const EditPlayerDetails = () => {

    // image upload
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
        const files = e.target.files;
        const newImages = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();

            reader.onload = (e) => {
                newImages.push(e.target.result);
                if (newImages.length === files.length) {
                    console.log('Selected Images:', newImages);
                    setSelectedImages(prevImages => [...prevImages, ...newImages]);
                }
            };

            reader.readAsDataURL(files[i]);
        }
    };
    // image upload

    return (
        <div className="View_details container p-0 overflow-hidden">
            <div className="job_offer desktop_vd edit_player_details_wrapper  ps-lg-0 pe-lg-0">
                <div className="row" style={{ margin: "0 40px" }}>
                    <div className="col-12 col-lg-3 ">
                        <div className="">
                            <img className="img-fluid" src={profileImage} alt="Profile" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="edit_profile_input">
                            <div className="mb-4 position-relative">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Player Name</label>
                                {/*  */}
                                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="your name" />

                            </div>
                            <div className="mb-4 position-relative">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Sports Type</label>
                                {/*  */}
                                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Basketball" />
                            </div>

                        </div>
                        <div className="personalInfo editpersonal_info">
                            <div className="row mb_40">
                                {inputFieldData.map((field, index) => (
                                    <div key={index} className="col-12 col-md-4">
                                        <div className="personal_info_edit_wrapper">
                                            <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: index < inputFieldData.length - 3 ? "40px" : "0" }}>
                                                <div className="w-100">
                                                    <label htmlFor={`exampleFormControlInput${index + 1}`} className="form-label">{field.lable}</label>

                                                    <input type="text" className="form-control" id={`exampleFormControlInput${index + 1}`} placeholder={field.placeholderText} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ViewDetailsMobile /> */}

            <UpdateexperienceAndMedia />

            <div className=" mb_60 experience_wrapper">
                <div className="row justify-content-start about_part">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 ">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">
                            Strengths Advantages
                        </p>
                        <div className="">
                            {/*  */}
                            <textarea className="form-control about_me_editField" id="exampleFormControlTextarea1" rows="3"
                                defaultValue=" Here are some of my notable strengths: Height and Wingspan: I am blessed with a tall stature and a remarkable wingspan, which give me a significant advantage in both offense and defense. My height allows me to effectively contest shots,"></textarea>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 ">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">About Me</p>
                        <div className="">
                            {/*  */}
                            <textarea className="form-control about_me_editField" id="exampleFormControlTextarea1" rows="3"
                                defaultValue=" Here are some of my notable strengths: Height and Wingspan: I am blessed with a tall stature and a remarkable wingspan, which give me a significant advantage in both offense and defense. My height allows me to effectively contest shots,"></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 ">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">
                            Expectations From a New Club
                        </p>
                        <div className="">
                            {/*  */}
                            <textarea className="form-control about_me_editField" id="exampleFormControlTextarea1" rows="3"
                                defaultValue=" Here are some of my notable strengths: Height and Wingspan: I am blessed with a tall stature and a remarkable wingspan, which give me a significant advantage in both offense and defense. My height allows me to effectively contest shots,"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Slider Start --> */}
            <div className="d-flex align-items-center gap-3 mb_28">
                <p className="f_sfPro text_color_36 fs_18" style={{ paddingLeft: "75px" }}>Gallery</p>
            
                <label style={{ cursor: "pointer" }} className="add_image_btn bg-none">
                    <span>Add Image</span>
                    <img src={plus4} alt="" />
                    <input type="file" multiple onChange={handleImageChange} style={{ display: 'none' }} />
                </label>
            </div>

            <EditGallary images={selectedImages} />

            <button className="experience_wrapper playerDetailsUpdate_btn">Update</button>
        </div >
    );
};

export default EditPlayerDetails;
