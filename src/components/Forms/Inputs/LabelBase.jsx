import { Label } from "reactstrap";

let LabelBaseProps = Object.assign({}, Label.prototype.props);

/**
 *
 * @param {LabelBaseProps} props
 * @returns
 */
const LabelBase = (props) => {
  return <Label {...props}>{props.children}</Label>;
};

LabelBase.propTypes = {
  ...(Label.propTypes && Label.propTypes),
};

export default LabelBase;
