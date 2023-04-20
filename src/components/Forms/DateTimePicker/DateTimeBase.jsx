import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const DateTimeBase = ({ ...rest }) => {
  return <Datetime closeOnSelect={true} {...rest} />;
};

export default DateTimeBase;
