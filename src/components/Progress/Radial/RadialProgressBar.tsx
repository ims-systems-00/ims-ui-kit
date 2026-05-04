import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ProgressBaseProps } from "../ProgressBase";

interface RadialProgressBarProps extends ProgressBaseProps {
  percentage?: number;
  customPercentage?: number;
}

const RadialProgressBar: React.FC<RadialProgressBarProps> = ({
  percentage = 0,
  customPercentage = 0.75,
  ...rest
}) => {
  const text = rest.text || `${percentage}%`;
  const options = {
    pathColor: "blue",
    rotation: 0.63,
    strokeLinecap: "butt",
    textSize: "16px",
    ...rest.options,
  };

  return (
    <div className="radial-progress-bar">
      <CircularProgressbar
        value={percentage * customPercentage}
        text={text}
        styles={buildStyles(options)}
      />
    </div>
  );
};

export default RadialProgressBar;
