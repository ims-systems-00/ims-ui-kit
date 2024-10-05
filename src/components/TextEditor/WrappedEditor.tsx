import React, { useContext } from "react";
import TextEditor, { TextEditorProps } from "./TextEditor";
import { TextEditorContext } from "./Context";
import ToolBar from "./Toolbar";
import classnames from "classnames";

// Define the props type for WrappedEditor
export interface WrappedEditorProps extends TextEditorProps {
  minimal?: boolean;
}

const WrappedEditor: React.FC<WrappedEditorProps> = (props) => {
  const { forceFocusEditorEnd, focusedForEditing } =
    useContext(TextEditorContext);

  return (
    <div
      className={classnames("draft-editor-container d-flex flex-column", {
        "editor-disabled": props.readOnly,
        "editor-active": focusedForEditing,
      })}
    >
      <div
        className={classnames("", {
          "d-flex flex-column input-area": !props.readOnly,
          "bg-light m-3": props.minimal,
        })}
      >
        <div
          className={classnames("", {
            "px-3 pt-3": !props.readOnly,
          })}
        >
          <TextEditor {...props} />
        </div>
        {!props.readOnly && (
          <div
            className="flex-grow-1"
            onMouseDown={(e) => forceFocusEditorEnd(e)}
          ></div>
        )}
        {!props.readOnly && (
          <div className="toolbar m-2 rounded">
            <ToolBar {...props} minimal={props.minimal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WrappedEditor;
