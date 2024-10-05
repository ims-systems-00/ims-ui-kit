import React from "react";
import { AwsStorageInformation } from "../../../types/AwsStorageInformation";
export interface TextEditorImageProps {
    src?: string;
    link?: string;
    alt?: string;
    storageInfo?: AwsStorageInformation;
}
declare const Image: React.FC<TextEditorImageProps>;
export default Image;
