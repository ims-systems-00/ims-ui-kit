import { UncontrolledCollapse } from "reactstrap";

let UncontrolledCollapseBaseProps = Object.assign(
  {},
  UncontrolledCollapse.prototype?.props
);

/**
 * @param {UncontrolledCollapseBaseProps} props
 * @returns
 * */

const UncontrolledCollapseBase = ({ children, ...rest }) => {
  return <UncontrolledCollapse {...rest}>{children}</UncontrolledCollapse>;
};

UncontrolledCollapseBase.propTypes = {
  ...(UncontrolledCollapse.propTypes && UncontrolledCollapse.propTypes),
};

export default UncontrolledCollapseBase;
