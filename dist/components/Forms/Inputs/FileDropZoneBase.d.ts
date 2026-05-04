import React from "react";
import { FileWithPath, DropzoneInputProps } from "react-dropzone";
/**
 * File drop zone can be used in any form elements along with other bootstrap forms. Allows users to
 * direct file drag and drop from their machine or just simply select ability by clicking anywhere on it
 */
export interface FileDropZoneBaseProps extends DropzoneInputProps {
    hint?: string;
    onSelected?: (files: FileWithPath[]) => void;
    noMultiple?: boolean;
    disabled?: boolean;
    acceptedFileTypes?: any;
    name?: string;
}
declare const FileDropZoneBase: React.FC<FileDropZoneBaseProps>;
export default FileDropZoneBase;
