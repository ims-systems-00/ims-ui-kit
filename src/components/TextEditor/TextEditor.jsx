import React from "react";
import { Editor } from "draft-js";
import { TextEditorContext } from "./Context";
import { editorMediaBlockRenderer } from "./entities/editorMediaBlockRenderer";
export default function TextEditor({ readOnly = false, ...props }) {
  const {
    editorRef,
    editorState,
    handleEditorStateChange,
    handleDroppedFiles,
    handlePastedFiles,
    handleKeyCommand,
    activateEditor,
    deactivateEditor,
  } = React.useContext(TextEditorContext);
  return (
    <>
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
    </>
  );
}
