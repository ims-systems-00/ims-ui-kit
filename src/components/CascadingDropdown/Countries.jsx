import React from "react";
import CascadingDropdown from "./CascadingDropdown";

const Countries = () => {
  const countries = {
    USA: ["New York", "Washington D.C.", "Los Angeles"],
    Canada: ["Toronto", "Montreal", "Vancouver"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
  };

  return <CascadingDropdown countries={countries} cities={{}} />;
};

export default Countries;
