import { useState } from "react";
import Compact from "./Compact";
import Select from 'react-select'

const options = [
  { value: 'Bangladesh', label: 'Country1' },
  { value: 'Country2', label: 'Country2' },
  { value: 'Country3', label: 'Country3' },
  { value: 'Country4', label: 'Country4' },
  { value: 'Country5', label: 'Country5' },
  { value: 'Country6', label: 'Country6' },

]
const options1 = [
  {
    value: "Bangladesh",
    label: "Bangladesh",

  },
  {
    value: "India",
    label: "India",

  },
  {
    value: "Switzerland",
    label: "Switzerland",

  },
  {
    value: "United Kingdom",
    label: "United Kingdom",

  },
  {
    value: "Ireland",
    label: "Ireland",

  },
  {
    value: "Italy",
    label: "Italy",

  },
  {
    value: "Netherland",
    label: "Netherland",

  },
];

const MarketList = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [flagurl, setFlagUrl] = useState("")
  const handleFilterClick = async () => {
    if (selectedCountry) {
      try {
        const countriesData = await getAllCountriesData();
        const countryData = countriesData.find(
          (country) => country.name.common === selectedCountry.value
        );

        if (countryData) {
          const flagUrl = countryData.flags.svg;
          setFlagUrl(flagUrl)
          console.log("Flag URL:", flagUrl);
        } else {
          console.log("Country data not found");
        }
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    } else {
      console.log("Please select a country first");
    }
  };
  const getAllCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    const data = await response.json();
    return data;
  };

  const handleClearAllClick = () => {
    setSelectedCountry(null);
  };
  return (
    <div>
      <section className="mt_150">
        <div className="container ps-0 pe-0">
          <div className="market_filter_wrapper">

            <div className="row align-items-center justify-content-center  ">
              <div className="col-lg-4">
                <Select
                  options={options1}
                  value={selectedCountry}
                  onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                />
              </div>
              <div className="col-lg-4">
                <Select options={options} />
              </div>
              <div className="col-lg-4 mb-0">
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <button
                      className="jobsearchbtn"
                      style={{ height: "39px" }}
                      onClick={handleFilterClick}
                    >
                      Filter
                    </button>
                  </div>
                  <div className="col-lg-6 col-6">
                    <button className="  jobsearchbtn" style={{ height: "39px" }} onClick={handleClearAllClick} >Clear All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Compact flagurl={flagurl} />
        </div>
      </section>
    </div>
  );
};

export default MarketList;