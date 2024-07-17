import React from "react";
import TextEditor from "./TextEditor";
import { TextEditorContext } from "./Context";
import ToolBar from "./Toolbar";
import classnames from "classnames";
export default function WrappedEditor(props) {
  const { forceFocusEditorEnd, focusedForEditing } =
    React.useContext(TextEditorContext);
  return (
    <div
      className={classnames("draft-editor-container d-flex flex-column", {
        "editor-disabled": props.readOnly,
        "editor-active": focusedForEditing,
      })}
    >
      <div
        className={classnames("", {
          "d-flex flex-column input-area": !props.readOnly, // removed
          "bg-light m-3": props.mimimal,
        })}
      >
        <div
          className={classnames("", {
            "px-3 pt-3": !props.readOnly,
          })}
        >
          <TextEditor {...props} />
        </div>
        {/**
         * following portion helps to focus on the actual text area
         * when unedited remaing area is clicked.
         */}
        {!props.readOnly && (
          <div className="flex-grow-1" onMouseDown={forceFocusEditorEnd}></div>
        )}
        {!props.readOnly && (
          <div className="toolbar m-2 rounded">
            <ToolBar {...props} minimal={props.minimal} />
          </div>
        )}
      </div>
    </div>
  );
}
