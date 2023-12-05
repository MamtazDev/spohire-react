import { Link } from 'react-router-dom';
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import gallary from '../../assets/gallary.png'
import arrow from '../../assets/t-leftarrow.png'
import GallaryTable from './GallaryTable';
import TransferMarketHeader from './TransferMarketHeader';

const Gallary = () => {

    return (
        <>
            <TransferMarketHeader />
            <div className="">
                <div className="table-responsive">
                    <div className="detailed p-0">
                        <div className="container">
                            <div className="mb_150">
                                <div className='d-flex justify-content-between align-items-center details_wrapper'>
                                    <div className='transfer_link'>
                                        <Link to="/transfarMarket"> <img src={arrow} alt="" /></Link>
                                    </div>
                                    <h3>Player Details</h3>
                                </div>
                                <div className='gallary_header'>
                                    <p>Josh Martin</p>
                                    <div>
                                        <img className='me-2' src={g1} alt="flag1" />
                                        <img src={g2} alt="red plus sign" />
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className='mt-3 mb-4'>
                                    <img className='img-fluid' src={gallary} alt="" />
                                </div>

                                <GallaryTable />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallary;