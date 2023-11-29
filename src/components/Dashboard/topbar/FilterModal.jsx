import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const FilterModal = () => {

    return (
        <div className="filter_parent">
            <div className="filter_wrapper">
                <div className="buttons1">
                    <h2>Job Offer Filter</h2>
                    <div className="d-flex" style={{ gap: "10px" }}>
                        <button className="filter_btn1" >On site</button>
                        <button className="filter_btn1">Hybrid</button>
                        <button className="filter_btn1"
                        >Remote</button>
                    </div>
                </div>
                <div className="buttons1">
                    <h2>Date Posted</h2>
                    <div className="d-flex" style={{ gap: "10px" }}>
                        <button className="filter_btn1">Any time</button>
                        <button className="filter_btn1"
                        >Past 24 hours</button>
                        <button className="filter_btn1">Past week</button>
                    </div>
                </div>
                <div className="buttons1">
                    <h2>Location </h2>
                    <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Country List"
                    />
                </div>
                <div className="buttons1">
                    <h2>Category </h2>
                    <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={options}
                        placeholder="Information Technology"
                    />
                </div>

            </div>
        </div>
    );
};

export default FilterModal;