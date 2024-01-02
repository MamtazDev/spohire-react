/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const jobCategories = [
    "Coach",
    "Administration",
    "Marketing",
    "betting",
    "Customer service",
    "manager",
    "agent",
    "journalist",
    "scout",
    "referee"
];
const FilterModal = ({ myDivRef }) => {
    const { user } = useSelector((state) => state.auth);
    console.log(user.role)

    const [countryNames, setCountryNames] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
            )
            .then(function (response) {
                setCountryNames(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div ref={myDivRef} className="filter_parent">
            <div className={`${location.pathname === '/dashboard/observed' || user.role === 'Player' ? 'filter_wrapper1' : 'filter_wrapper'}`}>

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
                    <h2>Location</h2>
                    <select className="form-select" aria-label="Default select example">
                        {countryNames.map((name, index) => (
                            <>
                                <option value="3" key={index}>{name.name}</option>
                            </>
                        ))}
                    </select>
                </div>

                <div className="buttons1">
                    <h2>Category</h2>
                    <select className="form-select" aria-label="Default select example">
                        {jobCategories.map((name, index) => (
                            <>
                                <option value="3" key={index}>{name}</option>
                            </>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default FilterModal;