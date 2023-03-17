import Nav from "../NavBase";
import NavItem from "../NavItemBase";
import NavLink from "../NavLinkBase";

const FullTabs = ({}) => {
  return (
    <>
      <h1>Full Tab Type 1</h1>
      <Nav tabs full type="1">
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-home"
            className="active"
            link
            onClick={(e) => e.preventDefault()}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-user"
            link
            onClick={(e) => e.preventDefault()}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            rightIcon="fa-solid fa-envelope"
            link
            onClick={(e) => e.preventDefault()}
          >
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-cog"
            rightIcon="fa-solid fa-angle-down"
            link
            onClick={(e) => e.preventDefault()}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Full Tab Type 2</h1>
      <Nav tabs full type="2">
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-home"
            className="active"
            link
            onClick={(e) => e.preventDefault()}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-user"
            link
            onClick={(e) => e.preventDefault()}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            rightIcon="fa-solid fa-envelope"
            link
            onClick={(e) => e.preventDefault()}
          >
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-cog"
            rightIcon="fa-solid fa-angle-down"
            link
            onClick={(e) => e.preventDefault()}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Full Tab Type 3</h1>
      <Nav tabs full type="3">
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-home"
            className="active"
            link
            onClick={(e) => e.preventDefault()}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-user"
            link
            onClick={(e) => e.preventDefault()}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            rightIcon="fa-solid fa-envelope"
            link
            onClick={(e) => e.preventDefault()}
          >
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-cog"
            rightIcon="fa-solid fa-angle-down"
            link
            onClick={(e) => e.preventDefault()}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default FullTabs;
