import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
export const data = {
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
  ],
  tbody: [
    {
      data: [
        {
          item: "Employee managemeent policy",
        },
        {
          item: "Reyad Hossain",
        },
        {
          item: "12/02/24",
        },
      ],
      actions: (
        <UncontrolledDropdown direction="right">
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
        },
        {
          item: "Rafee Abdullah",
        },
        {
          item: "12/02/24",
        },
      ],
    },
    {
      data: [
        {
          item: "Compliance managemeent",
        },
        {
          item: "Nuraz zamal",
        },
        {
          item: "12/02/24",
        },
      ],
    },
    {
      data: [
        {
          item: "Non disclosure aggrement",
        },
        {
          item: "Nurul Haque",
        },
        {
          item: "12/02/24",
        },
      ],
    },
  ],
};
