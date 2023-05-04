import React from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
} from "../../../index";
import useDebounce from "./useDebounce";

const FilterAndSearch = ({
  onFilter = () => {},
  onSearch = () => {},
  isSearchable,
  isFilterable,
  filters = [],
  tableToolbar,
  title = "",
}) => {
  let [filterLabel, setFilterLabel] = React.useState("");
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce(searchString, 500);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  React.useEffect(() => {
    onSearch({ value: { clientSearch: debouncedSearchString } });
  }, [debouncedSearchString]);
  return (
    <React.Fragment>
      <Row className="filter-search d-lg-flex justify-around align-items-center px-lg-4 my-4">
        <Col md="4" sm="12">
          {title && <h3>{title}</h3>}
        </Col>
        <Col md="8" sm="12">
          <div className="d-flex justify-content-lg-end justify-content-md-end action-container">
            <div className="d-flex create-filter-wrapper">
              {tableToolbar && (
                <div className="me-md-3 mr-md-3 create-filer">
                  {tableToolbar}
                </div>
              )}
              {isFilterable && (
                <div className="me-md-3 mr-md-3 create-filer">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                      className="filter"
                      color="secondary"
                      outline
                      size="md"
                    >
                      <i class="fa-solid fa-filter me-2 mr-2 p-0 shadow-sm--hover" />
                      {filterLabel ? filterLabel : "Filter"}
                    </DropdownToggle>
                    <DropdownMenu>
                      {filters &&
                        filters.length > 0 &&
                        filters.map((filter) => (
                          <DropdownItem
                            style={{
                              fontWeight: "500",
                              fontSize: "14px",
                              color: "#152536",
                            }}
                            onClick={() => {
                              setFilterLabel(filter.label);
                              onFilter(filter);
                            }}
                            className="d-flex align-items-center fw-bold my-2"
                          >
                            {filter.label}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </div>
            {isSearchable && (
              <div className="table-search-container shadow-sm--hover">
                <i className="fa-solid fa-search my-auto ms-3 ml-3 p-0" />
                <Input
                  size={"sm"}
                  onChange={(e) =>
                    setSearchString(e.currentTarget.value.toString())
                  }
                  placeholder="Search"
                  className="border-0 table-search-input"
                  type="text"
                ></Input>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterAndSearch;
