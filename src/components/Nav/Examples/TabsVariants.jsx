import Nav from "../NavBase";
import NavItem from "../NavItemBase";
import NavLink from "../NavLinkBase";

const TabsVariants = ({}) => {
  return (
    <>
      <h1>Variant - Primary</h1>
      <Nav tabs variant="primary">
        <NavItem>
          <NavLink active onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-home me-2"></i>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-user me-2"></i>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-envelope me-2"></i>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-cog me-2"></i>
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Variant - Secondary</h1>
      <Nav tabs variant="secondary">
        <NavItem>
          <NavLink active onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-home me-2"></i>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-user me-2"></i>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-envelope me-2"></i>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-cog me-2"></i>
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <h1>Variant - Outline</h1>
      <Nav tabs variant="outline">
        <NavItem>
          <NavLink active onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-home me-2"></i>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-user me-2"></i>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-envelope me-2"></i>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => e.preventDefault()}>
            <i className="fa-solid fa-cog me-2"></i>
            Settings
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default TabsVariants;
