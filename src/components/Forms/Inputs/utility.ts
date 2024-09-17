const style = (rest: any) => {
  return {
    control: (provided: any, state: any) => ({
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
    valueContainer: (provided: any, state: any) => ({
      ...provided,

      padding:
        rest.size === "sm"
          ? "0px 6px 0px 6px"
          : rest.size === "lg"
          ? "0 12px 0 12px"
          : "0 8px 0 8px",
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height:
        rest.size === "sm" ? "32px" : rest.size === "lg" ? "40px" : "36px",
    }),
  };
};
const formatCreateLabel = (word: any, inputValue: any) => {
  return `${word} "${inputValue}"`;
};
const disableInvalidEmail = (option: any) => {
  return !emailRegex.test(option.value);
};
const disableValidEmail = (option: any) => {
  return emailRegex.test(option.value);
};
export { style, formatCreateLabel, disableValidEmail, disableInvalidEmail };

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
