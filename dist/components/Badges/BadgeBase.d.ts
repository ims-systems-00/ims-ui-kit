import React from "react";
import { BadgeProps } from "reactstrap";
interface BadgeBaseProps extends BadgeProps {
    outline: string;
    fade: string;
}
declare const BadgeBase: React.FC<BadgeBaseProps>;
export default BadgeBase;
