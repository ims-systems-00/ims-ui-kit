import { Collapse } from "reactstrap";

let CollapseBaseProps = Object.assign({}, Collapse.prototype?.props);

/**
 * @param {CollapseBaseProps} props
 * @returns
 * */

const CollapseBase = ({ children, ...rest }) => {
  return <Collapse {...rest}>{children}</Collapse>;
};

CollapseBase.propTypes = {
  ...(Collapse.propTypes && Collapse.propTypes),
};

export default CollapseBase;
