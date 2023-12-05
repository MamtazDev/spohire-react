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
                    <div className="row align-items-center justify-content-center mb-5 ">
                        <div className="col-lg-3">
                            <Select options={options} />
                        </div>
                        <div className="col-lg-3">
                            <Select options={options} />
                        </div>
                        <div className="col-lg-3">
                            <button className=" btn w-100 btn-primary ">Filter</button>
                        </div>
                    </div>
                    <Compact />
                </div>
            </section>
        </div>
    );
};

export default MarketList;