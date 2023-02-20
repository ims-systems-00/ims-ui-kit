import { PopperTargetHelper } from "reactstrap";

let PopperTargetHelperBaseProps = Object.assign({}, PopperTargetHelper.prototype.props);

/**
 *
 * @param {PopperTargetHelperBaseProps} props
 * @returns
 */
const PopperTargetHelperBase = (props) => {
  return <PopperTargetHelper {...props}>{props.children}</PopperTargetHelper>;
};

PopperTargetHelperBase.propTypes = {
  ...(PopperTargetHelper.propTypes && PopperTargetHelper.propTypes),
};

export default PopperTargetHelperBase;
