import React from "react";
import Select from "react-select";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon, Row
} from "reactstrap";
// import useDebounce from "hooks/useDebounce";
// import filterImg from "../../assets/img/filter.svg";

const FilterAndSearch = ({
  toggle = () => {},
  toggleOff = () => {},
  onFilter = () => {},
  onSearch = () => {},
  hasBulkActions = false,
  filters = [],
  search,
  checkedIds = [],
}) => {
  let [searchString, setSearchString] = React.useState("");
  let [inputFocus, setInputFocus] = React.useState(false);
  // const debouncedSearchString = useDebounce(searchString, 500);
  // React.useEffect(() => {
  //   onSearch({ value: { clientSearch: debouncedSearchString } });
  // }, [debouncedSearchString]);

  //close the dropdown when the user clicks outside of it
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.className !==
          "fa-solid fa-ellipsis-vertical three-dots-2" &&
        event.target.id !== "action-icon" &&
        event.target.id !== "bulk-delete" &&
        event.target.id !== "bulk-nudge" &&
        event.target.id !== "bulk-detail" &&
        event.target.id !== "bulk-escalate"
      ) {
        toggleOff();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "30px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
  };

  return (
    <Row className="rounded-top table-filter-row">
      <Col lg="3" className="d-flex">
        <Select
          styles={customStyles}
          className="react-select default m-0 w-100 table-filter-input"
          classNamePrefix="react-select"
          name="singleSelect"
          onChange={(value) => {
            onFilter(value);
          }}
          defaultValue={filters.find((item) => item.default)}
          options={filters}
          placeholder={"Select filter"}
        />
      </Col>
      <Col lg="6" className="my-lg-0 mt-3">
        <InputGroup className="table-filter-input-search ">
          <Input
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            className="search-input"
            onChange={(e) => setSearchString(e.currentTarget.value.toString())}
            placeholder="Search item"
          />

          <InputGroupAddon addonType="append" className="search-input-btn">
            <Button
              type="button"
              className={`btn-search text-info m-0 px-2 py-0 border-left-0 ${
                inputFocus ? "search-input-button-focused" : ""
              }`}
              onClick={(e) =>
                onSearch({ value: { clientSearch: searchString } })
              }
            >
              <i className="tim-icons icon-zoom-split " />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      {hasBulkActions && (
        <Col className="d-flex justify-content-end align-items-center">
          <span className="d-flex align-items-center">
            <h6 className="mr-3 font-weight-700">Actions</h6>
            <i
              id="action-icon"
              onClick={() => {
                if (checkedIds.length > 0) {
                  toggle();
                }
              }}
              className="fa-solid fa-ellipsis-vertical three-dots mb-2"
            ></i>
          </span>
        </Col>
      )}
    </Row>
  );
};

export default FilterAndSearch;
