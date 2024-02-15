import React from 'react';
import region from "../../../assets/aregion.png";
import brows from "../../../assets/brows.svg";
import salary from "../../../assets/asalary.png";

const CreateAnnouncemnetModal = ({
                                     fileInputRef,
                                     handleFileChange,
                                     image,
                                     selectedCountry,
                                     countryNames,
                                     options,
                                     WorkplaceOptions,
                                     categoryOptions
                                 }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    {/*title*/}
                    <div className="position-relative text-start " style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Title
                        </label>

                        {/*<div className="form_icons" style={{top: "36px"}}>*/}
                        {/*    <img className="mt-0" src={region} alt="title"/>*/}
                        {/*</div>*/}

                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="From the list"
                            name="title"
                            required
                        />
                    </div>
                    {/*title end*/}

                    {/*category type*/}
                    <div className="position-relative text-start " style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Category
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
                                Select here
                            </option>
                            {/*{options.map((country, index) => (*/}
                            {/*    <option*/}
                            {/*        value={country.value}*/}
                            {/*        className=""*/}
                            {/*        key={index}*/}
                            {/*    >*/}
                            {/*        {country.value}*/}
                            {/*    </option>*/}
                            {/*))}*/}
                        </select>
                    </div>
                    {/*category type end*/}

                    {/* country */}
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
                                        Select here
                                    </option>
                                    {/*{countryNames.map((country, index) => (*/}
                                    {/*    <option*/}
                                    {/*        value={country.name}*/}
                                    {/*        className=""*/}
                                    {/*        key={index}*/}
                                    {/*    >*/}
                                    {/*        {country.name}*/}
                                    {/*    </option>*/}
                                    {/*))}*/}
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

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Write here"
                                        name="job_location"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* country end */}

                    {/*image*/}
                    <div className="position-relative text-start" style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlInput1"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{
                                display: "none",
                                borderRight: "none",
                                borderTopRightRadius: "0px !important",
                                borderBottomRightRadius: "0px !important"
                            }} // Hide the default file input
                        />
                        <div className="form_icons" style={{top: "36px"}}>
                            <img className="mt-0" src={brows} alt="image"/>
                        </div>

                        <div className={"d-flex upload_wrapper"}>
                            <input
                                type="text"
                                onClick={() => fileInputRef.current.click()}
                                className="form-control ps-5 border-0"
                                value={image}
                                style={{cursor: "pointer"}}
                                id="exampleFormControlInput1"
                                placeholder="Brows Here"
                            />
                            <button style={{
                                borderTopRightRadius: "5px",
                                borderBottomRightRadius: "5px",
                                backgroundColor: "#0177FB",
                                paddingLeft: "35px",
                                paddingRight: "35px",
                                color: "white"
                            }}>
                                Upload
                            </button>
                        </div>
                    </div>
                    {/*image end*/}

                </div>

                <div className="col-lg-6 ">
                    <div style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Status
                        </label>

                        <div className={"status_wrapper d-flex gap-3"}>
                            <button className={"status_btn_active"}>In progress</button>
                            <button className={"status_btn"}>Published</button>
                            <button className={"status_btn"}>Denied</button>
                        </div>
                    </div>

                    {/*category type*/}
                    <div className="position-relative text-start " style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Sports
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
                                Select here
                            </option>
                            {/*{options.map((country, index) => (*/}
                            {/*    <option*/}
                            {/*        value={country.value}*/}
                            {/*        className=""*/}
                            {/*        key={index}*/}
                            {/*    >*/}
                            {/*        {country.value}*/}
                            {/*    </option>*/}
                            {/*))}*/}
                        </select>
                    </div>
                    {/*category type end*/}

                    {/*    budget */}
                    <div className="position-relative text-start " style={{marginBottom: "32px"}}>
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Budget
                        </label>

                        <div className={"d-flex upload_wrapper"}>
                            <button style={{
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                backgroundColor: "#0177FB",
                                paddingLeft: "35px",
                                paddingRight: "35px",
                                color: "white"
                            }}>
                                $
                            </button>
                            <input
                                type="text"
                                className="form-control border-0"
                                value={image}
                                style={{cursor: "pointer"}}
                                id="exampleFormControlInput1"
                                placeholder="500"
                            />
                        </div>
                    </div>

                    <div className="mb-3" style={{marginBottom: "32px"}}>
                        <label
                            hytmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Description
                        </label>
                        <div className="input-group mb-3">
                        <textarea
                            type="text"
                            style={{height: "65px", boxShadow: "none"}}
                            className="form-control"
                            placeholder="Enter Your Description...."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="description"
                            required
                        />
                        </div>
                    </div>
                    {/*    budget end*/}

                </div>

            </div>
        </>
    );
};

export default CreateAnnouncemnetModal;