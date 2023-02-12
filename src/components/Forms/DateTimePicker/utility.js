import moment from "moment";

let pastDays = moment().subtract(1, "day");
let currentDay = moment();

// Disable past days only
let disablePastDays = function (current) {
  return current.isAfter(pastDays);
};

// Disable past and current days
let disablePastWithCurrentDays = function (current) {
  return current.isAfter(currentDay);
};

// Disable future days only
let disableFutureDays = function (current) {
  return current.isBefore(currentDay);
};

// Disable future and current days
let disableFutureWithCurrentDays = function (current) {
  return current.isBefore(pastDays);
};

// Disable past and future days
let disablePastWithFutureDays = function (current) {
  return current.isBetween(pastDays, currentDay);
};

//Disable Current Date Only but not past and future days
let disableCurrentDate = function (current) {
  return disableFutureDays(current) && disablePastDays(current);
};

//make a function which will recieve a from date. disable the days before that date, keeping the from date enabled
let disableDaysBeforeFromDate = function (current, fromDate) {
  return current.isAfter(fromDate) || current.isSame(fromDate);
};

//make a function which will recieve a from date. disable the days before that date, keeping the from date disabled
let disableDaysBeforeFromDateInclusive = function (current, fromDate) {
  return current.isAfter(fromDate);
};

//make a function which will recieve a to date. disable the days after that date, keeping the to date enabled
let disableDaysAfterToDate = function (current, toDate) {
  return current.isBefore(toDate) || current.isSame(toDate);
};

//make a function which will recieve a to date. disable the days after that date, keeping the to date disabled
let disableDaysAfterToDateInclusive = function (current, toDate) {
  return current.isBefore(toDate);
};

export {
    disablePastDays,
    disablePastWithCurrentDays,
    disableFutureDays,
    disableFutureWithCurrentDays,
    disablePastWithFutureDays,
    disableCurrentDate,
    disableDaysBeforeFromDate,
    disableDaysBeforeFromDateInclusive,
    disableDaysAfterToDate,
    disableDaysAfterToDateInclusive,
};

