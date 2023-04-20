import DateTime from "../DateTimeBase";

const DateTimeWithoutTime = ({}) => {
  return (
    <>
      <DateTime timeFormat={false} closeOnSelect={true} />
    </>
  );
};

export default DateTimeWithoutTime;
