import React from "react";
import Select from "react-select";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
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
  React.useEffect(() => {
    onSearch({ value: { clientSearch: debouncedSearchString } });
  }, [debouncedSearchString]);
  return (
    <Row>
      <Col md="3">
        <Select
          className="react-select default m-0 w-100"
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
      <Col md="6">
        <InputGroup>
          <Input
            onChange={(e) => setSearchString(e.currentTarget.value.toString())}
            placeholder="Search item"
          />
          {/* <InputGroupAddon addonType="append">
            <Button
              type="button"
              className="btn-simple text-info m-0 p-2"
              onClick={(e) =>
                onSearch({ value: { clientSearch: searchString } })
              }
            >
              <i className="tim-icons icon-zoom-split " />
            </Button>
          </InputGroupAddon> */}
        </InputGroup>
      </Col>
    </Row>
  );
};

export default FilterAndSearch;
