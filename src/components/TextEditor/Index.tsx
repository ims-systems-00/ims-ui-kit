import React from "react";
import TextEditorContextProvider from "./Context";
import WrappedEditor, { WrappedEditorProps } from "./WrappedEditor";
import { TextEditorContextProps } from "./types";
// Define the props interface
interface IndexProps extends WrappedEditorProps, TextEditorContextProps {}

// Functional component with props typed
const Index: React.FC<IndexProps> = (props) => {
  return (
    <TextEditorContextProvider {...props}>
      <WrappedEditor {...props} />
    </TextEditorContextProvider>
  );
};

export default Index;
