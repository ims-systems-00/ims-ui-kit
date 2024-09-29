import React from "react";
export interface FilePickerProps {
    accept?: string;
}
declare const FilePicker: React.ForwardRefExoticComponent<FilePickerProps & React.RefAttributes<HTMLInputElement>>;
export default FilePicker;
