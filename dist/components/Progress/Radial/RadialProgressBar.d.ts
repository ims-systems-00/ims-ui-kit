import React from "react";
import { ProgressBaseProps } from "../ProgressBase";
interface RadialProgressBarProps extends ProgressBaseProps {
    percentage?: number;
    customPercentage?: number;
}
declare const RadialProgressBar: React.FC<RadialProgressBarProps>;
export default RadialProgressBar;
