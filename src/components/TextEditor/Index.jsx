import React from "react";
import TextEditorContextProvider from "./Context";
import WrappedEditor from "./WrappedEditor";
export default function Index(props) {
  return (
    <TextEditorContextProvider {...props}>
      <WrappedEditor {...props} />
    </TextEditorContextProvider>
  );
}
