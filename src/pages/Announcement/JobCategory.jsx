import { Link } from 'react-router-dom';
import plus2 from '../../assets/plus2.png';
import { useState } from 'react';


const JobCategory = () => {
    const [checkboxStates, setCheckboxStates] = useState({
        football: false,
        basketball: false,
        handball: false,
        volleyball: false,
    });
    const [functionStates, setFunctionStates] = useState({
        football: false,
        basketball: false,
        handball: false,
        volleyball: false,
    });

    const sports = ['Football', 'Basketball', 'Handball', 'Volleyball'];
    const jobLocations = ['Paris', 'London', 'Finland', 'Canada'];


    const handleCheckboxClick = (sport) => {
        setCheckboxStates((prevStates) => ({
            ...prevStates,
            [sport.toLowerCase()]: !prevStates[sport.toLowerCase()],
        }));
    };
    const handleFunctionClick = (sport) => {
        setFunctionStates((prevStates) => ({
            ...prevStates,
            [sport.toLowerCase()]: !prevStates[sport.toLowerCase()],
        }));
    };


    return (
        <div>
            <div className="category_wrapper">
                <div className="blue_cat">
                    <p>Job by category</p>
                </div>
                <div className='white_category_part'>

                    {sports.map((sport, index) => (
                        <div key={index} className="cat_list">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`flexCheck${sport}`}
                                    checked={checkboxStates[sport.toLowerCase()]}
                                    onChange={() => handleCheckboxClick(sport)}
                                />
                            </div>
                            <span className='pointer' onClick={() => handleCheckboxClick(sport)}>{sport}</span>
                        </div>
                    ))}

                    <div className='cat_list1'>
                        <div className='blue_plus'>
                            <img src={plus2} alt="plus" />
                        </div>
                        <p> <Link to="/">Show more</Link> </p>

                    </div>
                </div>
            </div>
            <div className="category_wrapper">
                <div className="blue_cat">
                    <p>Job by location</p>
                </div>
                <div className='white_category_part'>
                    {jobLocations.map((sport, index) => (
                        <div key={index} className="cat_list">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`flexCheck${sport}`}
                                    checked={functionStates[sport.toLowerCase()]}
                                    onChange={() => handleFunctionClick(sport)}
                                />
                            </div>
                            <span className='pointer' onClick={() => handleFunctionClick(sport)}>{sport}</span>
                        </div>
                    ))}
                    <div className='cat_list1'>
                        <div className='blue_plus'>
                            <img src={plus2} alt="plus" />
                        </div>
                        <p> <button className='bg-none'>Show more</button> </p>
                    </div>
                </div>
            </div>
            <div className='best_matched'>
                <h3>Get Best Matched Jobs On your Email</h3>
                <button className='apply_now_btn'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobCategory;