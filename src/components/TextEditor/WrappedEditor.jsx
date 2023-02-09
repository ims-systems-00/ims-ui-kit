import React from "react";
import TextEditor from "./TextEditor";
import { TextEditorContext } from "./Context";
import ToolBar from "./Toolbar";
import classnames from "classnames";
export default function WrappedEditor(props) {
  const { forceFocusEditorEnd } = React.useContext(TextEditorContext);
  return (
    <div
      className={classnames("draft-editor-container d-flex flex-column", {
        "editor-disabled": props.readOnly,
      })}
    >
      {!props.readOnly && (
        <div>
          <ToolBar {...props} />
          <hr></hr>
        </div>
      )}
      <TextEditor {...props} />
      {/**
       * following portion helps to focus on the actual text area
       * when unedited remaing area is clicked.
       */}
      <div className="flex-grow-1" onClick={forceFocusEditorEnd}></div>
    </div>
  );
}
