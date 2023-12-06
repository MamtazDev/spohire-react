/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import brows from '../../assets/brows.png'
import { useState } from 'react';
const EditAnnouncements = () => {

    const fileInputRef = useRef(null);
    const [imageTitle, setImageTitle] = useState("")

    const handleFileInputChange = (e) => {
        // You can access the selected file using e.target.files[0]
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile.name);
        setImageTitle(selectedFile.name)
    };

    const handleUploadButtonClick = () => {
        // Trigger click on the hidden file input
        fileInputRef.current.click();
    };



    return (
        <>
            <div className="container">
                <div className="editAnnouncement_wrapper">
                    <div>
                        <h3>Edit Announcement</h3>
                    </div>
                    <form action="">
                        <div className="row mt_30 mb_56">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Announcement Title" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                    <div className="status_buttons">
                                        <button>In progress</button>
                                        <button>Completed</button>
                                        <button>Denied</button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Location</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Vegas street circuit" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label hytmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text input_budget" id="basic-addon1">$</span>
                                        <input type="text" class="form-control" placeholder="500" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <label hytmlFor="exampleFormControlInput1" className="form-label">Status</label>

                                <div class="input-group mb-3">
                                    <input onClick={handleUploadButtonClick} type="text" class="form-control ps-5" value={imageTitle ? imageTitle : ""} placeholder="Browse file" id="inputGroupFile02" />
                                    <div className="form_icons">
                                        <img style={{ top: "16px", left: "16px" }} src={brows} alt="" />
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <label class="input-group-text" for="" >Upload</label>
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