import React from "react";
import { FileDropZoneBaseProps } from "../Inputs/FileDropZoneBase";
interface ImsInputDropZoneProps extends FileDropZoneBaseProps {
    label: string;
    error?: string;
    name: string;
    onChange: (e: any) => void;
    noMultiple?: boolean;
    onLoad: (files: any) => void;
}
declare const ImsInputDropZone: React.FC<ImsInputDropZoneProps>;
export default ImsInputDropZone;
