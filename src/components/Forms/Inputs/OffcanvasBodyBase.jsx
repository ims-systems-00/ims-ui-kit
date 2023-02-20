import { OffcanvasBody } from "reactstrap";



let OffcanvasBodyBaseProps = Object.assign({}, OffcanvasBody.prototype.props);

/**
 *
 * @param {OffcanvasBodyBaseProps} props
 * @returns
 */
const OffcanvasBodyBase = (props) => {
  return <OffcanvasBody {...props}>{props.children}</OffcanvasBody>;
};

OffcanvasBodyBase.propTypes = {
  ...(OffcanvasBody.propTypes && OffcanvasBody.propTypes),
};

export default OffcanvasBodyBase;
