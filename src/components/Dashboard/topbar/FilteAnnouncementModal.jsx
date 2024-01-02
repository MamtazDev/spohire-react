/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const options = [
    "Alphabetical"
]

const FilteAnnouncementModal = ({ myDivRef1 }) => {
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
        <div ref={myDivRef1} className="filter_parent">
            <div className={`${location.pathname === '/dashboard/observed' || user.role === 'Player' ? 'filter_wrapper1' : 'filter_wrapper'}`}>

                <div className="buttons1">
                    <h2>Filter</h2>
                    <div className="d-flex" style={{ gap: "10px" }}>
                        <button className="filter_btn1" >By price</button>
                        <button className="filter_btn1">Date</button>
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
                    <h2>Filter by Club Name</h2>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>France</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilteAnnouncementModal;