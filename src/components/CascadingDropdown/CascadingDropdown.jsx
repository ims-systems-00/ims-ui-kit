import React from "react";
import CustomDropdown from "./CustomDropdown";

const countries = {
  USA: ["New York", "Washington D.C.", "Los Angeles"],
  Canada: ["Toronto", "Montreal", "Vancouver"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
};

const CascadingDropdown = ({ cities = {} }) => {
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [cityOptions, setCityOptions] = React.useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity("");
    setCityOptions(cities[country] || []);
  };

  const handleCityChange = (city) => setSelectedCity(city);

  return (
    <div>
      <CustomDropdown
        label="Select a country"
        options={Object.keys(countries)}
        selectedValue={selectedCountry}
        onChange={handleCountryChange}
      />
      {selectedCountry && (
        <CustomDropdown
          label="Select a city"
          options={cityOptions || []}
          selectedValue={selectedCity}
          onChange={handleCityChange}
        />
      )}
    </div>
  );
};

export default CascadingDropdown;
