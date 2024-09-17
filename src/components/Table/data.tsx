import React from "react";
import DropdownItem from "../Dropdowns/DropdownItemBase";
import DropdownMenu from "../Dropdowns/DropdownMenuBase";
import DropdownToggle from "../Dropdowns/DropdownToggleBase";
import UncontrolledDropdown from "../Dropdowns/UncontrolledDropdownBase";

interface ITableData {
  thead: Array<{
    className?: string;
    text: string;
  }>;
  tbody: Array<{
    className?: string;
    data: Array<{
      className: string;
      item: string | number | React.ReactNode;
    }>;
    actions?: React.ReactNode;
  }>;
}

export const data: ITableData = {
  thead: [
    {
      text: "Name",
      className: "",
    },
    {
      text: "Created by",
      className: "",
    },
    {
      text: "Date",
      className: "",
    },
    {
      text: "Actions",
      className: "",
    },
  ],
  tbody: [
    {
      data: [
        {
          item: "Employee managemeent policy Employee managemeent policy Employee managemeent policy Employee managemeent policy",
          className: "",
        },
        {
          item: "Reyad Hossain Employee managemeent policy",
          className: "",
        },
        {
          item: "12/02/24",
          className: "",
        },
      ],
      actions: (
        <UncontrolledDropdown direction="end">
          <DropdownToggle>
            <i className="fa-solid fa-home" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>hello</DropdownItem>
            <DropdownItem>world</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
    {
      data: [
        {
          item: "Fire risk assessment",
          className: "",
        },
        {
          item: "Rafee Abdullah",
          className: "",
        },
        {
          item: "12/02/24",
          className: "",
        },
      ],
      actions: (
        <UncontrolledDropdown direction="end">
          <DropdownToggle>
            <i className="fa-solid fa-home" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>hello</DropdownItem>
            <DropdownItem>world</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
    {
      data: [
        {
          item: "Compliance managemeent",
          className: "",
        },
        {
          item: "Nuraz zamal",
          className: "",
        },
        {
          item: "12/02/24",
          className: "",
        },
      ],
      actions: (
        <UncontrolledDropdown direction="end">
          <DropdownToggle>
            <i className="fa-solid fa-home" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>hello</DropdownItem>
            <DropdownItem>world</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
    {
      data: [
        {
          item: "Non disclosure aggrement",
          className: "",
        },
        {
          item: "Nurul Haque",
          className: "",
        },
        {
          item: "12/02/24",
          className: "",
        },
      ],
      actions: (
        <UncontrolledDropdown direction="end">
          <DropdownToggle>
            <i className="fa-solid fa-home" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>hello</DropdownItem>
            <DropdownItem>world</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
  ],
};
