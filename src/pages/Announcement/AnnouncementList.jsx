/* eslint-disable no-unused-vars */
import a1 from '../../assets/a11.png';
import flag from '../../assets/flag.png';
import dollar from '../../assets/coin-dollar.png';
import location from '../../assets/location.png';
import edit2 from '../../assets/edit2.png';
import delet from '../../assets/delete.png';
import JobCategory from './JobCategory';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const AnnouncementList = () => {
    return (
        <>
            <div className="container" style={{ marginTop: "104px", marginBottom: "150px" }}>
                <div className="row">
                    <div className="col-lg-9">
                        {
                            [0, 1, 2, 3, 4, 5].map(data => (
                                <>
                                    <div className="announcelist_wrapper">
                                        {/* parent flex with edit delete  */}
                                        <div className='d-flex justify-content-between align-items-start'>
                                            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                                                <div className='announcement_pic'>
                                                    <img src={a1} alt="" />
                                                </div>
                                                <div className='recruiment f_sfPro'>
                                                    <p>Player recruitment</p>
                                                    <div className="d-flex gap-3 flex-wrap">
                                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                            <img src={location} alt="" />
                                                            <span>Vegas Street Circuit</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                            <img src={flag} alt="" />
                                                            <span>Published</span>
                                                        </div>
                                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                            <img src={dollar} alt="" />
                                                            <span>USD 5000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* icon div */}
                                            <div className='d-lg-block d-none'>
                                                <div className='d-flex gap-3 '>
                                                    <button className='bg-none' style={{ color: '#929292' }}> <i className="fa-regular fa-bookmark"></i></button>
                                                    <Link to="/editAnnouncements"> <img src={edit2} alt="edit" /> </Link>
                                                    <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> <img src={delet} alt="delete" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                                        <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                                            <button className='bg-none' style={{ color: '#929292' }}> <i className="fa-regular fa-bookmark"></i></button>
                                            <button className='bg-none'>     <img src={edit2} alt="" /> </button>

                                            <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                                <img src={delet} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ))
                        }


                    </div>
                    <div className="col-lg-3">
                        <JobCategory />
                    </div>
                </div>
            </div>
            {/* delete modal */}
            <div className="modal fade" id="exampleModalToggle2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content delete_modal" style={{padding:"40px",wordWrap:"unset"}}>

                        <div className="modal-body" style={{padding:"10px",marginBottom:"14px"}}>
                            Are you sure want to delete Player Recruitment?
                        </div>
                        <div className="mx-auto delete_body_btns">
                            <button type="button" className="no_btn">No</button>
                            <button type="button" className="yes_btn" data-bs-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default AnnouncementList;