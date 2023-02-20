import { Offcanvas } from "reactstrap";


let OffcanvasBaseProps = Object.assign({}, Offcanvas.prototype.props);

/**
 *
 * @param {OffcanvasBaseProps} props
 * @returns
 */
const OffcanvasBase = (props) => {
  return <Offcanvas {...props}>{props.children}</Offcanvas>;
};

OffcanvasBase.propTypes = {
  ...(Offcanvas.propTypes && Offcanvas.propTypes),
};

export default OffcanvasBase;
