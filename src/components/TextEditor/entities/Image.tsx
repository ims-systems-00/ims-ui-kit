import React from "react";
import { AwsStorageInformation } from "../../../types/AwsStorageInformation";
export interface TextEditorImageProps {
  src?: string;
  link?: string;
  alt?: string;
  storageInfo?: AwsStorageInformation;
}
const Image: React.FC<TextEditorImageProps> = (props) => {
  if (props.src || props.link) {
    return (
      <img
        src={props.src || props.link}
        alt={props.alt || props.storageInfo?.Key || "..."}
        className="unselectable"
      />
    );
  }
  return null;
};
export default Image;
