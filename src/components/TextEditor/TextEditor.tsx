import { Editor } from "draft-js";
import React, { useContext } from "react";
import { TextEditorContext } from "./Context";
import { editorMediaBlockRenderer } from "./entities/editorMediaBlockRenderer";
import { TextEditorContextData } from "./types";

export interface TextEditorProps {
  readOnly?: boolean;
  placeholder?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
  readOnly = false,
  ...props
}) => {
  const {
    editorRef,
    editorState,
    handleEditorStateChange,
    handleDroppedFiles,
    handlePastedFiles,
    handleKeyCommand,
    activateEditor,
    deactivateEditor,
  }: TextEditorContextData = useContext(TextEditorContext);

  return (
    <Editor
      ref={editorRef}
      blockRendererFn={editorMediaBlockRenderer}
      placeholder={props.placeholder}
      onChange={handleEditorStateChange}
      editorState={editorState}
      spellCheck={true}
      handleKeyCommand={handleKeyCommand}
      handleDroppedFiles={handleDroppedFiles}
      handlePastedFiles={handlePastedFiles}
      readOnly={readOnly}
      onFocus={activateEditor}
      onBlur={deactivateEditor}
    />
  );
};

export default TextEditor;
