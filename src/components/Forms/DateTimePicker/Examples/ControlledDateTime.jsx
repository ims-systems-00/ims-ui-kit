import React, { useState } from "react";
import DateTime from "../DateTimeBase";
import moment from "moment";

const ControlledDateTime = ({}) => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <DateTime
        value={date}
        onChange={handleChange}
        inputProps={{
          placeholder: "Select Date and Time",
          required: true,
          name: "date",
        }}
      />
      <br /> <br />
      <h4>
        <strong>Raw Date & Time:</strong> {date.toString()}
      </h4>
      <br /> <br />
      <h4>
        <strong>Formatted Date & Time:</strong> {date.toLocaleString()}
      </h4>
      <br /> <br />
      <>
        {/*time formats with moment */}
        <h3 className="mb-5">
          <strong>Formatted Date & Time With Moment JS</strong>
        </h3>
        <h4>
          <strong>Full Year, Month, Date, Hour, Minute, Second:</strong>{" "}
          {moment(date).format("YYYY-MM-DD HH:mm:ss")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Month, Date, Hour, Minute:</strong>{" "}
          {moment(date).format("YYYY-MM-DD HH:mm")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Month, Date, Hour:</strong>{" "}
          {moment(date).format("YYYY-MM-DD HH")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Month, Date:</strong>{" "}
          {moment(date).format("YYYY-MM-DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Month:</strong> {moment(date).format("YYYY-MM")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year:</strong> {moment(date).format("YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month, Date, Full Year:</strong>{" "}
          {moment(date).format("MM-DD-YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month, Date, Year:</strong> {moment(date).format("MM-DD-YY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month, Date:</strong> {moment(date).format("MM-DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month, Full Year:</strong> {moment(date).format("MM-YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month, Year:</strong> {moment(date).format("MM-YY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month:</strong> {moment(date).format("MM")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Full Month Name, Date</strong>{" "}
          {moment(date).format("YYYY MMMM DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Year, Month Name, Date</strong>{" "}
          {moment(date).format("YYYY MMM DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Year, Month Name, Date</strong>{" "}
          {moment(date).format("YY MMM DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Year, Full Month Name, Date</strong>{" "}
          {moment(date).format("YY MMMM DD")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Date, Month Name, Full Year:</strong>
          {moment(date).format("DD MMM YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Date, Full Month Name, Full Year:</strong>
          {moment(date).format("DD MMMM YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Full Month Name,Date, Full Year:</strong>
          {moment(date).format("MMMM DD YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Month Name, Date, Full Year:</strong>
          {moment(date).format("MMM DD YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Date, Full Year:</strong> {moment(date).format("DD-YYYY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Date, Year:</strong> {moment(date).format("DD-YY")}
        </h4>
        <br /> <br />
        <h4>
          <strong>Date:</strong> {moment(date).format("DD")}
        </h4>
        <br /> <br />
      </>
    </>
  );
};

export default ControlledDateTime;
