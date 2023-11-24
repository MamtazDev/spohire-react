import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import gallary from '../../assets/gallary.png'
import mbappe from '../../assets/mbappe.png';
import flag1 from '../../assets/flag1.png';
import flag2 from '../../assets/flag2.png';
import flag3 from '../../assets/flag3.png';
import flag4 from '../../assets/flag4.png';
import flag5 from '../../assets/flag5.png';

const Gallary = () => {

    return (
        <>
            <div className="container">
                <div className='gallary_header'>
                    <p>Josh Martin</p>
                    <div>
                        <img className='me-2' src={g1} alt="flag1" />
                        <img src={g2} alt="red plus sign" />
                    </div>
                </div>

                <div className='mt-3 mb-4'>
                    <img className='img-fluid' src={gallary} alt="" />
                </div>

                <div className="div-responsive">
                    <div className="div compact_div">
                        <div>
                            <div className='div_design'>
                                <div className='div_data'>
                                    <div className='d-flex gap_14'>
                                        <img src={mbappe} alt="" />
                                        <div className='col1_wrapper'>

                                            <h4>Kylian Mbappe</h4>
                                            <p>Left Winger</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='age_text'>22</p>
                                <div className='d-flex flex-column gap_4 al' style={{ gap: '4px' }}>
                                    <img src={flag1} alt="" />
                                    <img src={flag2} alt="" />
                                </div>
                                <div>
                                    <div className='d-flex gap_11 align-items-center'>
                                        <img src={flag3} alt="" />
                                        <span className='postmouth_text mb-0'>Without Club</span>
                                    </div>

                                </div>
                                <div>
                                    <div className='d-flex align-items-center gap_19'>
                                        <img src={flag4} alt="" />
                                        <div>
                                            <p className='postmouth_text'>Portsmouth</p>
                                            <img src={flag5} alt="" />
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallary;