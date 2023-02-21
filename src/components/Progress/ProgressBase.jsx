import { Progress } from "reactstrap";


let ProgressBaseProps = Object.assign({}, Progress.prototype.props);

/**
 *
 * @param {ProgressBaseProps} props
 * @returns
 */
const ProgressBase = (props) => {
  return <Progress {...props}></Progress>;
};

ProgressBase.propTypes = {
  ...(Progress.propTypes && Progress.propTypes),
};

export default ProgressBase;
