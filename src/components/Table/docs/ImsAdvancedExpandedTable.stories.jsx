import classNames from "classnames";
import React from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ImsInputCheck,
  UncontrolledDropdown,
} from "../../../index";
import Badge from "../../Badges/BadgeBase";
import ImsExpandedTable from "../AdvancedExpandedTable/Index";
import filters from "../filters";
import sorts from "../sorts";
export default {
  title: "components/AdvanceExpandedTable",
  component: ImsExpandedTable,
  parameters: {
    docs: {
      description: {
        component: `This component is built for quick rendering of simple tablular data the data. This the simplest version of iMS Systems tables`,
      },
    },
  },
};

const Template = (args) => <ImsExpandedTable {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: [
    {
      checkbox: (
        <>
          <ImsInputCheck />
        </>
      ),
      id: "asd8917239asdh",
      ID: "INC-23",
      title: "Hello world this is me",
      status: <Badge fade="info">Accepted</Badge>,
      actions: (
        <div>
          <UncontrolledDropdown direction="right">
            <DropdownToggle className="rounded-circle p-0 table-actions">
              <i class="fa-solid fa-ellipsis" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>hello</DropdownItem>
              <DropdownItem>world</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      ),
    },
    {
      checkbox: (
        <>
          <ImsInputCheck />
        </>
      ),
      id: "asd8917239asdh",
      ID: "INC-23",
      title: "Hello world this is me",
      status: (
        <Badge fade="danger">
          <i className="fa-solid fa-ban me-1 p-0" />
          Open
        </Badge>
      ),
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="rounded-circle p-0 table-actions">
              <i class="fa-solid fa-ellipsis" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>hello</DropdownItem>
              <DropdownItem>world</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      checkbox: (
        <>
          <ImsInputCheck />
        </>
      ),
      id: "asd8917239asdh",
      ID: "INC-23",
      title: "Hello world this is me",
      status: <Badge fade="success">Completed</Badge>,
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="rounded-circle p-0 table-actions">
              <i class="fa-solid fa-ellipsis" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>hello</DropdownItem>
              <DropdownItem>world</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      checkbox: (
        <>
          <ImsInputCheck />
        </>
      ),
      id: "asd8917239asdh",
      ID: "INC-23",
      title: "Hello world this is me",
      status: <Badge fade="pending">Pending</Badge>,
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="rounded-circle p-0 table-actions">
              <i class="fa-solid fa-ellipsis" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>hello</DropdownItem>
              <DropdownItem>world</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
  ],
  columns: [
    {
      Header: (
        <>
          <ImsInputCheck />
        </>
      ),
      accessor: "checkbox",
      width: 25,
      sortable: false,
      filterable: false,
      disableSortBy: true,
      disableFilters: true,
    },
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
      disableSortBy: true,
      disableFilters: true,
    },
  ],
  /**
   * this row props function must return an object that constains
   * component props allowed by react dom.
   */
  rowProps: (props) => ({
    onClick: () => {},
    className: classNames(props.className, {
      /**
       * you can check props.values to implement custom logic for
       * apllying custom classes
       */
      // "stripped-indicator-info-4": true,
    }),
  }),
  filters: filters,
  sorts: sorts,
  handleFilter: (e) => {
    console.log(e);
  },
  handleSearch: (e) => {
    console.log(e);
  },
  handleSort: (e) => {
    console.log(e);
  },
  title: "Hardware Management",
  isFilterable: true,
  isSearchable: true,
  isSortable: true,
  hasBulkActions: true,
  tableToolbar: (
    <React.Fragment>
      <Button
        color="permission"
        outline
        size="md"
        className="shadow-sm--hover"
        onClick={() => {
          alert("Create A New Ticket");
        }}
      >
        <i class="fa-solid fa-edit me-2 p-0" />
        Create
      </Button>
    </React.Fragment>
  ),
};
