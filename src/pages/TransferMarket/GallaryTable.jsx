
import mbappe from '../../assets/mbappe.png';
import flag1 from '../../assets/flag1.png';
import flag2 from '../../assets/flag2.png';
import flag3 from '../../assets/flag3.png';
import flag4 from '../../assets/flag4.png';
import flag5 from '../../assets/flag5.png';
import filter1 from '../../assets/filter1.png';
const GallaryTable = () => {
    return (
        <div>
            
                {/* table */}
                <div className="detailed_header">
                    <div className="dcol3">
                        <p>Player</p>
                    </div>
                    <div className='dcol2'>
                        <p className='age_text'>Age</p>
                    </div>
                    <div className='dcol2'>
                        <p>Nat.</p>
                    </div>
                    <div className="dcol1">
                        <p>Left</p>
                    </div>
                    <div className="dcol1">
                        <p>Joined</p>
                    </div>
                    <div className="dcol1">
                        <p>Transfer date <img src={filter1} alt="filter1" /></p>
                    </div>
                    <div className="dcol1">
                        <p>Market value <img src={filter1} alt="filter1" /></p>
                    </div>
                    <div className="dcol2">
                        <p> Fee <img src={filter1} alt="filter1" /></p>
                    </div>
                </div>
                <div className="detailed_wrapper">
                    {/* col 1 */}
                    <div className="dcol3">
                        <div className='div_data'>
                            <div className='d-flex gap_14 align-items-center'>
                                <img className='profile_image11' src={mbappe} alt="" />
                                <div className='col1_wrapper d_col_wrapper'>

                                    <h4>Kylian Mbappe</h4>
                                    <p>Left Winger</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col2 */}
                    <div className='dcol2 '>
                        <p className='age_text d-flex justify-content-center'>22</p>
                    </div>
                    <div className='dcol2'>
                        <div className='d-flex flex-column gap_4 align-items-center' style={{ gap: '4px' }}>
                            <img src={flag1} alt="" />
                            <img src={flag2} alt="" />
                        </div>
                    </div>

                    <div className="dcol1">
                        <div className='d-flex gap_11 align-items-center justify-content-start'>
                            <img src={flag3} alt="" />
                            <span className='postmouth_text mb-0'>Without Club</span>
                        </div>
                    </div>
                    <div className="dcol1">
                        <div className='d-flex align-items-center gap_19'>
                            <img src={flag4} alt="" />
                            <div>
                                <p className='postmouth_text'>Portsmouth</p>
                                <img src={flag5} alt="" />
                            </div>


                        </div>
                    </div>
                    <div className="dcol1">
                        <p className='age_text'>Nov 13, 2023</p>
                    </div>
                    <div className="dcol1">

                        <p className='age_text'>$4500K</p>
                    </div>

                    <div className="dcol2">
                        <p className='age_text'> - </p>

                    </div>
                </div>
        </div>
    );
};

export default GallaryTable;