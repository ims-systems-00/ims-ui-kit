import React from "react";
import { TextEditorProps } from "./TextEditor";
export interface WrappedEditorProps extends TextEditorProps {
    minimal?: boolean;
}
declare const WrappedEditor: React.FC<WrappedEditorProps>;
export default WrappedEditor;
