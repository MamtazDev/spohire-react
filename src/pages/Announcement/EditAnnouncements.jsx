/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import brows from '../../assets/brows.png'
import { useState } from 'react';
const EditAnnouncements = () => {

    // const fileInputRef = useRef(null);
    // const [imageTitle, setImageTitle] = useState("")

    // const handleFileInputChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     console.log('Selected File:', selectedFile.name);
    //     setImageTitle(selectedFile.name)
    // };

    // const handleUploadButtonClick = () => {
    //     fileInputRef.current.click();
    // };
    const fileInputRef = useRef(null);
    const [formValues, setFormValues] = useState({
        title: '',
        status: '',
        location: '',
        budget: '',
        file: null,
        description: '',
    });

    const [imageTitle, setImageTitle] = useState('');

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile.name);
        setImageTitle(selectedFile.name);

        setFormValues((prevValues) => ({
            ...prevValues,
            file: selectedFile,
        }));
    };

    const handleInputChange = (name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleUpdateClick = (e) => {
        e.preventDefault();
        console.log('Form Data:', formValues);
    };

    return (
        <>
            <div className="container">
                <div className="editAnnouncement_wrapper">
                    <div>
                        <h3>Edit Announcement</h3>
                    </div>
                    <form action="" onSubmit={handleUpdateClick}>
                        <div className="row mt_30 mb_56">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Announcement Title" /> */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Announcement Title"
                                        value={formValues.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                    <div className="status_buttons">
                                        <button
                                            onClick={() => handleInputChange('status', 'In Progress')}
                                            className={formValues.status === 'In Progress' ? 'active_status' : ''}
                                        >
                                            In Progress
                                        </button>
                                        <button
                                            onClick={() => handleInputChange('status', 'Completed')}
                                            className={formValues.status === 'Completed' ? 'active_status' : ''}
                                        >
                                            Completed
                                        </button>
                                        <button
                                            onClick={() => handleInputChange('status', 'Denied')}
                                            className={formValues.status === 'Denied' ? 'active_status' : ''}
                                        >
                                            Denied
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Location</label>
                                    {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Vegas street circuit" /> */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Vegas street circuit"
                                        value={formValues.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Budget</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text input_budget" id="basic-addon1">$</span>
                                        {/* <input type="text" class="form-control" placeholder="500" aria-label="Username" aria-describedby="basic-addon1" /> */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="500"
                                            aria-label="Budget"
                                            aria-describedby="basic-addon1"
                                            value={formValues.budget}
                                            onChange={(e) => handleInputChange('budget', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <label hytmlFor="exampleFormControlInput1" className="form-label">Status</label>

                                <div class="input-group mb-3 ">
                                    <input onClick={handleUploadButtonClick} type="text" class="form-control position-relative ps-5" value={imageTitle ? imageTitle : ""} placeholder="Browse file" id="inputGroupFile02" />
                                    <div className="form_icons">
                                        <img style={{ position: "absolute", bottom: "-2px", left: "0" }} src={brows} alt="" />
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <label class="input-group-text" for="" onClick={handleUploadButtonClick}>Upload</label>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Description</label>
                                    <div class="input-group mb-3">
                                        <textarea type="text" class="form-control" placeholder="We can't wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and we're thrilled to take" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="update_btn1" type="submit">Update</button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    );
};

export default EditAnnouncements;