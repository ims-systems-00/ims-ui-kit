import React from "react";
import ImsInputDropZone from "../ImsInputDropZone";

const ImsInputFileDropzone = ({}) => {
  return (
    <>
      <h2>File Dropzone</h2>
      <ImsInputDropZone
        label="Label Text"
        icon="fa-solid fa-home"
        onChange={(e) => console.log(e)}
      />
    </>
  );
};

export default ImsInputFileDropzone;
