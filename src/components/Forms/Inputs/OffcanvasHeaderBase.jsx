import { OffcanvasHeader } from "reactstrap";



let OffcanvasHeaderBaseProps = Object.assign({}, OffcanvasHeader.prototype.props);

/**
 *
 * @param {OffcanvasHeaderBaseProps} props
 * @returns
 */
const OffcanvasHeaderBase = (props) => {
  return <OffcanvasHeader {...props}>{props.children}</OffcanvasHeader>;
};

OffcanvasHeaderBase.propTypes = {
  ...(OffcanvasHeader.propTypes && OffcanvasHeader.propTypes),
};

export default OffcanvasHeaderBase;
