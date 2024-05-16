import classNames from "classnames";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const variants = {
  outline: "outline",
  filled: "filled",
};
const DateTimeBase = ({ variant = variants.outline, ...rest }) => {
  return (
    <Datetime
      className={classNames(rest.className || "", {
        "form-control-filled": variant !== variants.filled,
      })}
      {...rest}
    />
  );
};

export default DateTimeBase;
