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
      id: "asd8917239asdh",
      ID: "INC-23",
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
      id: "asd8917239asdh",
      ID: "INC-23",
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
      id: "asd8917239asdh",
      ID: "INC-23",
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
      id: "asd8917239asdh",
      ID: "INC-23",
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
    {
      Header: "Reference",
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
    },
  ],
  // rowProps: (props) => ({
  //   onClick: () => console.log(props),
  //   className: classNames(props.className, {
  //     "stripped-indicator-info-4": true,
  //   }),
  // }),
};
