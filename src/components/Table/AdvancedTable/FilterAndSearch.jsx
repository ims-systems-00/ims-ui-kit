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
} from "../../../index";
import useDebounce from "./useDebounce";

const FilterAndSearch = ({
  onFilter = () => {},
  onSearch = () => {},
  filters = [],
  createBtn = null,
  title = "",
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
          <h3>{title}</h3>
        </Col>
        <Col md="8" sm="12">
          <div className="d-flex justify-content-lg-end justify-content-md-end action-container">
            <div className="d-flex create-filter-wrapper">
              {createBtn && (
                <div className="pe-3 create-filer">{createBtn}</div>
              )}
              <div className="pe-3 create-filer">
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
                    {filters &&
                      filters.length > 0 &&
                      filters.map((item) => (
                        <DropdownItem
                          onClick={() => {
                            onFilter(item);
                          }}
                          className="d-flex align-items-center fw-bold my-2"
                        >
                          {item}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="table-search-container shadow-sm--hover">
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
