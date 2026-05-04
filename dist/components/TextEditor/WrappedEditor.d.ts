import React from "react";
import { TextEditorProps } from "./TextEditor";
import { ToolBarProps } from "./Toolbar";
export interface WrappedEditorProps extends TextEditorProps, ToolBarProps {
    minimal?: boolean;
}
declare const WrappedEditor: React.FC<WrappedEditorProps>;
export default WrappedEditor;
