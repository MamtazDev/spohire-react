
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
            
            <div className="table-responsive">
                    <div className="detailed">
                        <table className="table">
                            <thead style={{ marginBottom: '100px' }}>
                                <tr>
                                    <th scope="col">Player</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Nat.</th>
                                    <th scope="col">Left</th>
                                    <th scope="col">Joined</th>
                                    <th scope="col">Transfer date <img src={filter1}  className='filter_img' alt="filter1" /></th>
                                    <th scope="col">Market value <img src={filter1}  className='filter_img' alt="filter1" /></th>
                                    <th scope="col">Fee<img src={filter1}  className='filter_img' alt="filter1" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='row_1'>
                                    <td >
                                        <div className='div_data'>
                                            <div className='d-flex gap_14 align-items-center'>
                                                <img className='profile_image11' src={mbappe} alt="" />
                                                <div className='col1_wrapper d_col_wrapper'>
                                                    <h4>Kylian Mbappe</h4>
                                                    <p>Left Winger</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> <p className='age_text d-flex justify-content-center'>22</p></td>
                                    <td> <div className='d-flex flex-column gap_4 align-items-center' style={{ gap: '4px' }}>
                                        <img src={flag1} alt="flag1" />
                                        <img src={flag2} alt="flag1" />
                                    </div></td>
                                    <td> <div className='d-flex gap_11 align-items-center justify-content-start'>
                                        <img src={flag3} alt="flag1" />
                                        <span className='postmouth_text mb-0'>Without Club</span>
                                    </div></td>
                                    <td> <div className='d-flex align-items-center gap_19'>
                                        <img src={flag4} alt="flag1" />
                                        <div>
                                            <p className='postmouth_text'>Portsmouth</p>
                                            <img src={flag5} alt="flag1" />
                                        </div>
                                    </div></td>
                                    <td>   <p className='age_text'>Nov 13, 2023</p></td>
                                    <td><p className='age_text'>$4500K</p></td>
                                    <td>    <p className='age_text'> - </p></td>
                                </tr>
                                <tr className='row_2'>
                                    <td >
                                        <div className='div_data'>
                                            <div className='d-flex gap_14 align-items-center'>
                                                <img className='profile_image11' src={mbappe} alt="" />
                                                <div className='col1_wrapper d_col_wrapper'>
                                                    <h4>Kylian Mbappe</h4>
                                                    <p>Left Winger</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td> <p className='age_text d-flex justify-content-center'>22</p></td>
                                    <td> <div className='d-flex flex-column gap_4 align-items-center' style={{ gap: '4px' }}>
                                        <img src={flag1} alt="flag1" />
                                        <img src={flag2} alt="flag1" />
                                    </div></td>
                                    <td> <div className='d-flex gap_11 align-items-center justify-content-start'>
                                        <img src={flag3} alt="flag1" />
                                        <span className='postmouth_text mb-0'>Without Club</span>
                                    </div></td>
                                    <td> <div className='d-flex align-items-center gap_19'>
                                        <img src={flag4} alt="flag1" />
                                        <div>
                                            <p className='postmouth_text'>Portsmouth</p>
                                            <img src={flag5} alt="flag1" />
                                        </div>
                                    </div></td>
                                    <td>   <p className='age_text'>Nov 13, 2023</p></td>
                                    <td><p className='age_text'>$4500K</p></td>
                                    <td>    <p className='age_text'> - </p></td>
                                </tr>
                               

                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default GallaryTable;