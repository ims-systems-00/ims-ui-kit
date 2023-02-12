import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const DateTimeBase = ({...rest }) => {
  return <Datetime {...rest} />;
};

export default DateTimeBase;
