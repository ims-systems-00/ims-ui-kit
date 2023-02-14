const style = (rest) => {
  return {
    control: (provided, state) => ({
      ...provided,
      minHeight:
        rest.size === "sm" ? "32px" : rest.size === "lg" ? "40px" : "36px",
      borderColor: `${state.isFocused ? "#1D8BF8" : "#CED4DA"}`,
      transition: "border-color 0.15s ease-in-out",
      boxShadow: "none",
      "&:hover": {
        borderColor: `${state.isFocused ? "#1D8BF8" : "#CED4DA"}`,
      },
      ...(rest.styles || {}),
    }),
    valueContainer: (provided, state) => ({
      ...provided,

      padding:
        rest.size === "sm"
          ? "0px 6px 0px 6px"
          : rest.size === "lg"
          ? "0 12px 0 12px"
          : "0 8px 0 8px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height:
        rest.size === "sm" ? "32px" : rest.size === "lg" ? "40px" : "36px",
    }),
  };
};
const formatCreateLabel = (word, inputValue) => {
  return `${word} "${inputValue}"`;
};
const disableInvalidEmail = (option) => {
  return !emailRegex.test(option.value);
};
const disableValidEmail = (option) => {
  return emailRegex.test(option.value);
};
export {
  style,
  formatCreateLabel,
  disableValidEmail,
  disableInvalidEmail,
};

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
