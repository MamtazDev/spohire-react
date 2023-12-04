import tennis from '../../assets/tennis.png'
import flag from '../../assets/flag.png';
import dollar from '../../assets/coin-dollar.png';
import location from '../../assets/location.png';
import ApplyJobs from './ApplyJobs';

const MatchesJob = () => {

    return (
        <>
            <div className="container">
                <h3 className='job_matches_title'>We found <span>300</span> Matches for you</h3>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((data) => (
                                    <div className="col-lg-4" key={data}>
                                        <div className="matchedJobs_wrapper">
                                            <div className='d-flex gap-4 align-items-center'>
                                                <div className='tennis_logo'>
                                                    <img src={tennis} alt="" />
                                                </div>
                                                <div className='tennis_desc'>
                                                    <p>Tennis Trades</p>
                                                    <small>Bet 365</small>
                                                </div>
                                            </div>
                                            <div className="jobs_details">

                                                <div className='d-flex align-items-center' style={{ gap: "10px" }}>
                                                    <img src={location} alt="" />
                                                    <span>Bari, Haly</span>
                                                </div>
                                                <div className='d-flex align-items-center' style={{ gap: "10px" }}>
                                                    <img src={flag} alt="" />
                                                    <span>English   </span>
                                                </div>
                                                <div className='d-flex align-items-center' style={{ gap: "10px" }}>
                                                    <img src={dollar} alt="" />
                                                    <span>Undisclosed Salary</span>
                                                </div>
                                            </div>
                                            <button className='apply_btn'  data-bs-toggle="modal" data-bs-target="#exampleModal">Apply</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <nav aria-label="">
                    <ul className="pagination d-flex justify-content-center gap-3">
                        <li className="page-item disabled">
                            <span className="page-link">
                                <i className='fa fa-angle-left'></i>
                            </span>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item ">
                            <span className="page-link">
                                2
                                <span className="sr-only">(current)</span>
                            </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className='fa fa-angle-right'></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ApplyJobs />
        </>
    );
};

export default MatchesJob;