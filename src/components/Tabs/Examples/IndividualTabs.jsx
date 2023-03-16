import Nav from "../../Nav/NavBase";
import NavItem from "../../Nav/NavItemBase";
import NavLink from "../../Nav/NavLinkBase";

const IndividualTabs = ({}) => {
  return (
    <>
      <h1>Individual Tab Type 1</h1>
      <Nav tabs individual type="1">
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-home"
            active
            link
            onClick={(e) => e.preventDefault()}
          >
            Home
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Individual Tab Type 2</h1>
      <Nav tabs individual type="2">
        <NavItem>
          <NavLink
            rightIcon="fa-solid fa-envelope"
            active
            link
            onClick={(e) => e.preventDefault()}
          >
            Message
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Individual Tab Type 3</h1>
      <Nav tabs individual type="3">
        <NavItem>
          <NavLink
            leftIcon="fa-solid fa-cog"
            rightIcon="fa-solid fa-angle-down"
            active
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

export default IndividualTabs;
