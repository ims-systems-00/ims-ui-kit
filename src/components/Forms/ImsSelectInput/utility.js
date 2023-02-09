export const style = (rest) => {
  return {
    control: (provided, state) => ({
      ...provided,
      minHeight:
        rest.size === "sm" ? "29px" : rest.size === "lg" ? "46px" : "36px",
      border: `1px solid ${state.isFocused ? "#1D8BF8" : "#CED4DA"}`,
      boxShadow: state.isFocused ? "0 0 0 1px #1D8BF8" : "none",
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
        rest.size === "sm" ? "29px" : rest.size === "lg" ? "46px" : "36px",
    }),
  };
};
