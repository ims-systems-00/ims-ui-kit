import { TabPane } from "reactstrap";

let TabPaneBaseProps = Object.assign({}, TabPane.prototype?.props);

/**
 *
 * @param {TabPaneBaseProps} props
 * @returns
 */

const TabPaneBase = ({ children, ...rest }) => {
  return <TabPane {...rest}>{children}</TabPane>;
};

TabPaneBase.propTypes = {
  ...(TabPane.propTypes && TabPane.propTypes),
};

export default TabPaneBase;
