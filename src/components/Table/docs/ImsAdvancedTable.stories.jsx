import classNames from "classnames";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import ImsAdvancedTable from "../AdvancedTable/Index";
export default {
  title: "components/AdvancedTable",
  component: ImsAdvancedTable,
  parameters: {
    docs: {
      description: {
        component: `This component is built for quick rendering of simple tablular data the data. This the simplest version of iMS Systems tables`,
      },
    },
  },
};

const Template = (args) => <ImsAdvancedTable {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: [
    {
      // checkbox: (
      //   <>
      //     <input type="checkbox" />
      //   </>
      // ),
      id: "asd8917239asdh",
      ID: (
        <>
          <input type="checkbox" />
          <span
            style={{
              marginLeft: "20px",
            }}
          >
            INC-23
          </span>
        </>
      ),
      title: "Hello world this is me",
      actions: (
        <>
          <UncontrolledDropdown direction="right">
            <DropdownToggle>
              <i className="fa-solid fa-home" />
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
      // checkbox: (
      //   <>
      //     <input type="checkbox" />
      //   </>
      // ),
      id: "asd8917239asdh",
      ID: (
        <>
          <input type="checkbox" />
          <span
            style={{
              marginLeft: "20px",
            }}
          >
            INC-23
          </span>
        </>
      ),
      title: "Hello world this is me",
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle>
              <i className="fa-solid fa-home" />
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
      // checkbox: (
      //   <>
      //     <input type="checkbox" />
      //   </>
      // ),
      id: "asd8917239asdh",
      ID: (
        <>
          <input type="checkbox" />
          <span
            style={{
              marginLeft: "20px",
            }}
          >
            INC-23
          </span>
        </>
      ),
      title: "Hello world this is me",
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle>
              <i className="fa-solid fa-home" />
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
      // checkbox: (
      //   <>
      //     <input type="checkbox" />
      //   </>
      // ),
      id: "asd8917239asdh",
      ID: (
        <>
          <input type="checkbox" />
          <span
            style={{
              marginLeft: "20px",
            }}
          >
            INC-23
          </span>
        </>
      ),
      title: "Hello world this is me",
      actions: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle>
              <i className="fa-solid fa-home" />
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
    // {
    //   Header: () => (
    //     <input
    //       style={{
    //         cursor: "pointer",
    //       }}
    //       className="ms-1"
    //       type="checkbox"
    //     />
    //   ),
    //   accessor: "checkbox",
    //   sortable: false,
    //   filterable: false,
    //   disableSortBy: true,
    //   disableFilters: true,
    //   width: 20,
    // },
    {
      Header: () => (
        <div className="d-flex align-items-center">
          <input
            style={{
              cursor: "pointer",
            }}
            className="ms-1 "
            type="checkbox"
          />{" "}
          <span
            style={{
              marginLeft: "20px",
            }}
          >
            REFERENCE
          </span>
        </div>
      ),
      accessor: "ID",
    },
    {
      Header: "Title",
      accessor: "title",
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
      "stripped-indicator-info-4": true,
    }),
  }),
};
