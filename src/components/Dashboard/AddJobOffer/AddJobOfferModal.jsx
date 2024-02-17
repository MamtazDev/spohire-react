import React from 'react';
import region from "../../../assets/aregion.png";
import brows from "../../../assets/brows1.png";
import salary from "../../../assets/asalary.png";

const AddJobOfferModal = ({fileInputRef, handleFileChange, image, selectedCountry, countryNames, options, WorkplaceOptions, categoryOptions  }) => {
    return (
        <>
            <div className="text-center modal_title">Add Job offer</div>
            <div className="row">
                <div className="col-lg-6">
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Job Title
                        </label>
                        <div className="form_icons" style={{top: "36px"}}>
                            <img className="mt-0" src={region} alt="title"/>
                        </div>
                        <input
                            type="text"
                            className="form-control ps-5"
                            id="exampleFormControlInput1"
                            placeholder="Enter Job Title"
                            name="title"
                            required
                        />
                    </div>
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Company Logo
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlInput1"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{display: "none"}} // Hide the default file input
                        />
                        <div className="form_icons" style={{top: "36px"}}>
                            <img className="mt-0" src={brows} alt="user"/>
                        </div>
                        <input
                            type="text"
                            onClick={() => fileInputRef.current.click()}
                            className="form-control ps-5"
                            value={image}
                            style={{cursor: "pointer"}}
                            id="exampleFormControlInput1"
                            placeholder="Brows Here"
                        />
                    </div>

                    {/* SELECT */}
                    <div className="position-relative text-start ">
                        <div className="row">
                            <div className="col-lg-6 job_location_select">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Country
                                </label>

                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    style={{
                                        minHeight: "44px",
                                        width: "100%",
                                        backgroundColor: "#FFFFFF",
                                        padding: "0 14px",
                                    }}
                                    name="country"
                                    value={selectedCountry}
                                    onChange={(event) =>
                                        handleChange(event.target.value)
                                    }
                                >
                                    <option selected disabled>
                                        Select country
                                    </option>
                                    {countryNames.map((country, index) => (
                                        <option
                                            value={country.name}
                                            className=""
                                            key={index}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="position-relative text-start "
                                    style={{marginBottom: "32px"}}
                                >
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        City
                                    </label>

                                    <div className="form_icons" style={{top: "36px"}}>
                                        <img className="mt-0" src={region} alt="title"/>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control ps-5"
                                        id="exampleFormControlInput1"
                                        placeholder="Your city"
                                        name="job_location"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SELECT */}
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Job type
                        </label>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{
                                minHeight: "44px",
                                width: "100%",
                                backgroundColor: "#FFFFFF",
                                padding: "0 14px",
                            }}
                            name="jobType"
                            // value={jobType}
                            onChange={(event) => handleJobType(event.target.value)}
                        >
                            <option selected disabled>
                                Select Type
                            </option>
                            {options.map((country, index) => (
                                <option
                                    value={country.value}
                                    className=""
                                    key={index}
                                >
                                    {country.value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Company
                        </label>
                        <div className="form_icons" style={{top: "36px"}}>
                            <img className="mt-0" src={region} alt="user"/>
                        </div>
                        <input
                            type="text"
                            className="form-control ps-5"
                            id="exampleFormControlInput1"
                            placeholder="Enter your company"
                            name="company"
                            required
                        />
                    </div>
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Workplace Type
                        </label>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{
                                minHeight: "44px",
                                width: "100%",
                                backgroundColor: "#FFFFFF",
                                padding: "0 14px",
                            }}
                            name="workplaceType"
                            onChange={(event) =>
                                handleWorkPlaceType(event.target.value)
                            }
                        >
                            <option selected disabled>
                                Select Type
                            </option>
                            {WorkplaceOptions.map((country, index) => (
                                <option value={country.value} key={index}>
                                    {country.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <div className="row">
                            <div className="col-lg-6">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Category
                                </label>
                                {/* <Select
                        className="basic-single"
                        classNamePrefix="sdfsdsd"
                        name="color"
                        options={categoryOptions}
                        placeholder="Information Technology"
                        style={{ padding: "12px 14px", height: "40px" }}
                        onChange={(selectedOption) =>
                          setRole(selectedOption.value)
                        }
                      /> */}
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    style={{
                                        minHeight: "44px",
                                        width: "100%",
                                        backgroundColor: "#FFFFFF",
                                        padding: "0 14px",
                                    }}
                                    name="workplaceType"
                                    // value={role}
                                    onChange={(event) =>
                                        handleCategory(event.target.value)
                                    }
                                >
                                    <option selected disabled>
                                        Select Type
                                    </option>
                                    {categoryOptions.map((category, index) => (
                                        <option
                                            value={category.value}
                                            className=""
                                            key={index}
                                        >
                                            {category.value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Language
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter language"
                                    name="language"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="position-relative text-start "
                        style={{marginBottom: "32px"}}
                    >
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Salary
                        </label>
                        <div className="form_icons" style={{top: "36px"}}>
                            <img className="mt-0" src={salary} alt="user"/>
                        </div>
                        <input
                            type="number"
                            className="form-control ps-5"
                            id="exampleFormControlInput1"
                            placeholder="Numerical digit only"
                            required
                            name="salary"
                            min="1"
                        />
                    </div>
                </div>
                <div className="position-relative text-start">
                    <div className="mb-3">
                        <label
                            hytmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Description
                        </label>
                        <div className="input-group mb-3">
                        <textarea
                            type="text"
                            style={{height: "65px"}}
                            className="form-control"
                            placeholder="Enter Your Description...."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="description"
                            required
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddJobOfferModal;