import React from "react";
import TextEditorContextProvider from "./Context";
import TextEditor from "./TextEditor";

interface FormatedContentsProps {
  [key: string]: any;
}

const FormatedContents: React.FC<FormatedContentsProps> = (props) => {
  return (
    <TextEditorContextProvider {...props}>
      <TextEditor {...props} readOnly={true} />
    </TextEditorContextProvider>
  );
};

export default FormatedContents;
