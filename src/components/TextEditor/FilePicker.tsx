import React from "react";
export interface FilePickerProps {
  accept?: string;
}
const FilePicker = React.forwardRef<HTMLInputElement, FilePickerProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="d-none"
        type={"file"}
        accept={props.accept || "image/*"}
      />
    );
  }
);
export default FilePicker;
