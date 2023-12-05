import p1 from '../../../assets/p1.png';

const PlayerJobForm = () => {
    return (
        <div>

            <div className="personal_info_edit_wrapper">
                <div className="d-flex flex-column align-items-start gap-3" style={{ marginBottom: "40px" }} >
                    <div className="w-100 player_job_form_wrapper">
                        <div className="position-relative text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
                            <div className='form_icons' style={{top:"44px"}}>
                                <img className='mt-0' src={p1} alt="user" />
                            </div>
                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Playing position" />
                        </div>
                        <div className="position-relative text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Playing Position</label>
                            <div className='form_icons' style={{top:"44px"}}>
                                <img className='mt-0' src={p1} alt="user" />
                            </div>
                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Playing position" />
                        </div>
                        <div className="position-relative text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Offered Salary</label>
                            <div className='form_icons' style={{top:"44px"}}>
                                <img className='mt-0' src={p1} alt="user" />
                            </div>
                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Numerical digit only" />
                        </div>
                        <div className="position-relative text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                            <div className='form_icons' style={{top:"44px"}}>
                                <img className='mt-0' src={p1} alt="user" />
                            </div>
                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Select your location" />
                        </div>
                        <div className="position-relative text-start">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Language</label>
                            <div className='form_icons' style={{top:"44px"}}>
                                <img className='mt-0' src={p1} alt="user" />
                            </div>
                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Select your region" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerJobForm;