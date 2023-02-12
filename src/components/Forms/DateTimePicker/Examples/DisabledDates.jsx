import DateTime from "../DateTimeBase";
import {
  disableCurrentDate,
  disableDaysAfterToDate,
  disableDaysAfterToDateInclusive,
  disableDaysBeforeFromDate,
  disableDaysBeforeFromDateInclusive,
  disableFutureDays,
  disableFutureWithCurrentDays,
  disablePastDays,
  disablePastWithCurrentDays,
  disablePastWithFutureDays
} from "../utility";

const DisabledDays = ({}) => {
  return (
    <>
      <h4>Only Pas Dates Disabled</h4>
      <DateTime isValidDate={disablePastDays} />
      <br /> <br />
      <h4>Both Past and Current Days Disabled</h4>
      <DateTime isValidDate={disablePastWithCurrentDays} />
      <br /> <br />
      <h4>Only Future Dates Disabled</h4>
      <DateTime isValidDate={disableFutureDays} />
      <br /> <br />
      <h4>Both Future and Current Days Disabled</h4>
      <DateTime isValidDate={disableFutureWithCurrentDays} />
      <br /> <br />
      <h4>Both Past and Future Days Disabled</h4>
      <DateTime isValidDate={disablePastWithFutureDays} />
      <br /> <br />
      <h4>Only Current Date Disabled</h4>
      <DateTime isValidDate={disableCurrentDate} />
      <br /> <br />
      <h4>Disable Days Before "From Date"</h4>
      <DateTime
        isValidDate={(current) =>
          disableDaysBeforeFromDate(current, "2023-02-18")
        }
      />
      <br /> <br />
      <h4>Disable Days Before "From Date" and Including the "From Date"</h4>
      <DateTime
        isValidDate={(current) =>
          disableDaysBeforeFromDateInclusive(current, "2023-02-18")
        }
      />
      <br /> <br />
      <h4>Disable Days After "To Date"</h4>
      <DateTime
        isValidDate={(current) => disableDaysAfterToDate(current, "2023-02-18")}
      />
      <br /> <br />
      <h4>Disable Days After "To Date" and Including the "To Date"</h4>
      <DateTime
        isValidDate={(current) =>
          disableDaysAfterToDateInclusive(current, "2023-02-18", {
            disablePastDays: true,
          })
        }
      />
      <br /> <br />
      <h4>
        Disable Days After "To Date", And Disable the Past Dates without current
        Date
      </h4>
      <DateTime
        isValidDate={(current) =>
          disableDaysAfterToDateInclusive(current, "2023-02-18") &&
          disablePastDays(current)
        }
      />
      <br /> <br />
      <h4>
        Disable Days After "To Date", And Disable the Past Dates with current
        Date
      </h4>
      <DateTime
        isValidDate={(current) =>
          disableDaysAfterToDateInclusive(current, "2023-02-18") &&
          disablePastWithCurrentDays(current)
        }
      />
      <br /> <br />
    </>
  );
};

export default DisabledDays;
