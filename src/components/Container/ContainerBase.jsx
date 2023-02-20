import { Container } from "reactstrap";


let ContainerBaseProps = Object.assign({}, Container.prototype.props);

/**
 *
 * @param {ContainerBaseProps} props
 * @returns
 */
const ContainerBase = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

ContainerBase.propTypes = {
  ...(Container.propTypes && Container.propTypes),
};

export default ContainerBase;
