import Compact from "./Compact";
import Select from 'react-select'

const options = [
    { value: 'Country1', label: 'Country1' },
    { value: 'Country2', label: 'Country2' },
    { value: 'Country1', label: 'Country1' },
    { value: 'Country2', label: 'Country2' },
    { value: 'Country1', label: 'Country1' },
    { value: 'Country2', label: 'Country2' },

]
const MarketList = () => {

    return (
        <div>
            <section className="mt_150">
                <div className="container ps-0 pe-0">
                    <div className="market_filter_wrapper">

                        <div className="row align-items-center justify-content-center  ">
                            <div className="col-lg-4">
                                <Select options={options} />
                            </div>
                            <div className="col-lg-4">
                                <Select options={options} />
                            </div>
                            <div className="col-lg-4 mb-0">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <button className="  jobsearchbtn" style={{ height: "39px" }} >Filter</button>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <button className="  jobsearchbtn" style={{ height: "39px" }} >Clear All</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <Compact />
                </div>
            </section>
        </div>
    );
};

export default MarketList;