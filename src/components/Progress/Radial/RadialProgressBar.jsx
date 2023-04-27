import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Progress from "../ProgressBase";

function RadialProgressBar({
  percentage = 0,
  customPercentage = 0.75,
  ...props
}) {
  let text = props.text || `${percentage}%`;
  let options = {
    pathColor: "blue",
    rotation: 0.63,
    strokeLinecap: "butt",
    textSize: "16px",
    ...props.options,
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
}

RadialProgressBar.propTypes = {
  ...(Progress.propTypes && Progress.propTypes),
};

export default RadialProgressBar;
