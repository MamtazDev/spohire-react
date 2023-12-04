import auser from '../../assets/auser.png';
import region from '../../assets/aregion.png';
import dob from '../../assets/adob.png';
import position from '../../assets/afullname.png';
import weight from '../../assets/aweight.png';
import height from '../../assets/aheight.png';
import salary from '../../assets/asalary.png';
import language from '../../assets/alanguage.png';

const ApplyJobs = () => {
    return (
        <div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{
                        maxWidth: '1240px',width:"100%", margin: "auto"
                    }}>
                        <div className="modal-header p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <h1 className="modal-title fs-5 text-center apply_jobs_title" id="exampleModalLabel">Apply for the job</h1>
                        <div className="modal-body text-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={auser} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Region</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={region} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your region" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Birth Date</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={dob} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Playing Position</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={position} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your Playing Position" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Your Weight</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={weight} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your  Weight" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Your Height</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={height} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Enter your  Height" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Expected Salary</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={salary} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="Numerical digit only" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4 position-relative">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Language</label>
                                            <div className='form_icons'>
                                                <img className='mt-0' src={language} alt="user" />
                                            </div>
                                            <input type="email" className="form-control ps-5" id="exampleFormControlInput1" placeholder="enter your region" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-primary apply_now_btn" style={{maxWidth:"568px",width:"100%"}}>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJobs;