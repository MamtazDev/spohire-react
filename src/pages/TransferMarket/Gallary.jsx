import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import gallary from '../../assets/gallary.png'
import GallaryTable from './GallaryTable';

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
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='mt-3 mb-4'>
                    <img className='img-fluid' src={gallary} alt="" />
                </div>

                <GallaryTable />

               
            </div>
        </>
    );
};

export default Gallary;