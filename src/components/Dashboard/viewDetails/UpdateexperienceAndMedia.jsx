import insta from '../../../assets/insta1.png'
import fb from '../../../assets/fb1.png'
import Twitter from '../../../assets/twiter1.png'
import plus from '../../../assets/plus3.png'


const UpdateexperienceAndMedia = () => {
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
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label htmlFor='exampleFormControlInput1' className="form-label">
                                                Start Year
                                            </label>
                                            <input type="text" className="form-control" id='exampleFormControlInput1' placeholder='2003' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label htmlFor='exampleFormControlInput1' className="form-label">
                                                End Year
                                            </label>
                                            <input type="text" className="form-control" id='exampleFormControlInput1' placeholder='2008' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">

                                        <button className='add_more_btn'> <span>Add more</span>
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


                    {/* abput me edit  */}
                    {/* <div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                        </div>


                    </div> */}

                </div>

            </div>



        </>
    );
};

export default UpdateexperienceAndMedia;