import { Link } from 'react-router-dom';
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import player from '../../assets/player1.png'
import arrow from '../../assets/t-leftarrow.png'
import playerbg from '../../assets/playerdetailsbg.png'
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

                                <div className='mt-3 mb-4 player_details_bg position-relative'>
                                    <img src={playerbg} alt="" />
                                    <div className='player_details_img'>
                                        <img className='img-fluid' src={player} alt="" />
                                    </div>
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