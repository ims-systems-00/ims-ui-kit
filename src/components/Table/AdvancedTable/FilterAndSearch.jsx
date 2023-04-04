import React from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
} from "reactstrap";
import useDebounce from "./useDebounce";

const FilterAndSearch = ({
  onFilter = () => {},
  onSearch = () => {},
  filters = [],
}) => {
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce(searchString, 500);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  React.useEffect(() => {
    onSearch({ value: { clientSearch: debouncedSearchString } });
  }, [debouncedSearchString]);
  return (
    <React.Fragment>
      <Row className="filter-search d-lg-flex justify-around align-items-center px-lg-4 py-4">
        <Col md="4" sm="12">
          <h3>Hardware</h3>
        </Col>
        <Col md="8" sm="12">
          <div className="d-flex justify-content-lg-end justify-content-md-end action-container">
            <div className="d-flex create-filter-wrapper">
              <div className="pe-3 create">
                <Button
                  color="secondary"
                  outline
                  size="md"
                  className="shadow-sm--hover"
                >
                  <i class="fa-solid fa-edit pe-2 py-0" />
                  Create
                </Button>
              </div>
              <div className="pe-3 create">
                <Dropdown
                  onChange={(value) => {
                    onFilter(value);
                  }}
                  defaultValue={filters.find((item) => item.default)}
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <DropdownToggle
                    className="filter"
                    color="secondary"
                    outline
                    size="md"
                  >
                    <i class="fa-solid fa-filter pe-2 py-0 shadow-sm--hover" />
                    Filter
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Button
                        size="sm"
                        className="btn-icon d-flex align-items-center"
                      >
                        <span className="fw-bold">All Units</span>
                      </Button>
                    </DropdownItem>
                    <DropdownItem>
                      <Button
                        size="sm"
                        className="btn-icon d-flex align-items-center"
                      >
                        <span className="fw-bold">Internal</span>
                      </Button>
                    </DropdownItem>
                    <DropdownItem>
                      <Button
                        size="sm"
                        className="btn-icon d-flex align-items-center"
                      >
                        <span className="fw-bold">External</span>
                      </Button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="search-container shadow-sm--hover">
              <i className="fa-solid fa-search" />
              <Input
                onChange={(e) =>
                  setSearchString(e.currentTarget.value.toString())
                }
                placeholder="Search"
                className="border-0"
                type="text"
              ></Input>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterAndSearch;
