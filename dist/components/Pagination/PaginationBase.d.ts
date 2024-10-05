import React from "react";
import { PaginationProps } from "reactstrap";
interface PaginationBaseProps extends PaginationProps {
    separated?: boolean;
}
declare const PaginationBase: React.FC<PaginationBaseProps>;
export default PaginationBase;
