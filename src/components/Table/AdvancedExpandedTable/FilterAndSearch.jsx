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
import { UncontrolledDropdown } from "reactstrap";

const FilterAndSearch = ({
  onFilter = () => {},
  onSearch = () => {},
  onSort = () => {},
  isSearchable,
  isFilterable,
  hasBulkActions,
  isSortable,
  filters = [],
  sorts = [],
  tableToolbar,
  title = "",
}) => {
  let [filterLabel, setFilterLabel] = React.useState("");
  let [sortLabel, setSortLabel] = React.useState("");
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce(searchString, 500);
  const [filterDropdownOpen, setFilterDropdownOpen] = React.useState(false);
  const filterToggle = () => setFilterDropdownOpen(!filterDropdownOpen);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);
  const sortToggle = () => setSortDropdownOpen(!sortDropdownOpen);
  React.useEffect(() => {
    onSearch({ value: { clientSearch: debouncedSearchString } });
  }, [debouncedSearchString]);
  return (
    <React.Fragment>
      <Row className="filter-search d-lg-flex justify-around align-items-center px-lg-4 my-4">
        <Col md="4" sm="12" className=" mb-3">
          {title && <h4>{title}</h4>}
        </Col>
        <Col md="8" sm="12" className=" mb-3">
          <div className="d-flex justify-content-lg-end justify-content-md-end action-container">
            {tableToolbar && (
              <div className="me-md-3 mr-md-3 create-filer">{tableToolbar}</div>
            )}
            {hasBulkActions && (
              <>
                <UncontrolledDropdown>
                  <DropdownToggle className=" p-0 table-actions border-primary text-primary">
                    <i class="fa-solid fa-ellipsis-vertical" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>hello</DropdownItem>
                    <DropdownItem>world</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}
          </div>
        </Col>
        <Col md="8" sm="12">
          <div className="d-flex justify-content-lg-start justify-content-md-start action-container">
            {isSearchable && (
              <div className="me-md-3 mr-md-3  table-search-container shadow-sm--hover">
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
            <div className="d-flex create-filter-wrapper">
              {isFilterable && (
                <div className="me-md-3 mr-md-3 create-filer">
                  <Dropdown isOpen={filterDropdownOpen} toggle={filterToggle}>
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
            <div className="d-flex create-filter-wrapper">
              {isSortable && (
                <div className="me-md-3 mr-md-3 create-filer">
                  <Dropdown isOpen={sortDropdownOpen} toggle={sortToggle}>
                    <DropdownToggle
                      className="filter"
                      color="secondary"
                      outline
                      size="md"
                    >
                      <i class="fa-solid fa-sort me-2 mr-2 p-0 shadow-sm--hover" />
                      {sortLabel ? sortLabel : "Sort"}
                    </DropdownToggle>
                    <DropdownMenu>
                      {sorts &&
                        sorts.length > 0 &&
                        sorts.map((sort) => (
                          <DropdownItem
                            style={{
                              fontWeight: "500",
                              fontSize: "14px",
                              color: "#152536",
                            }}
                            onClick={() => {
                              setSortLabel(sort.label);
                              onSort(sort);
                            }}
                            className="d-flex align-items-center fw-bold my-2"
                          >
                            {sort.label}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterAndSearch;
