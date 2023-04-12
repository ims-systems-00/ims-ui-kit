import React from "react";
import TextEditor from "./TextEditor";
import { TextEditorContext } from "./Context";
import ToolBar from "./Toolbar";
import classnames from "classnames";
export default function WrappedEditor(props) {
  const { readOnly, forceFocusEditorEnd, focusedForEditing } =
    React.useContext(TextEditorContext);
  return (
    <div
      className={classnames("draft-editor-container d-flex flex-column", {
        "editor-disabled": props.readOnly,
        "editor-active": focusedForEditing,
      })}
    >
      {!props.readOnly && (
        <div className="bg-light toolbar">
          <ToolBar {...props} />
          {/* <hr></hr> */}
        </div>
      )}
      <div className="m-3 bg-light input-area d-flex flex-column">
        <div className="px-3 pt-3">
          <TextEditor {...props} />
        </div>
        {/**
         * following portion helps to focus on the actual text area
         * when unedited remaing area is clicked.
         */}
        {!props.readOnly && (
          <div className="flex-grow-1" onMouseDown={forceFocusEditorEnd}></div>
        )}
      </div>
    </div>
  );
}
