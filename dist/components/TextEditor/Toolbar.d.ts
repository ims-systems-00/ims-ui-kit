import React, { MouseEvent } from "react";
interface ToolBarProps {
    minimal?: boolean;
    enableSubmit?: boolean;
    onSubmit?: (e: MouseEvent<HTMLButtonElement>, editorState: any) => void;
}
declare const ToolBar: React.FC<ToolBarProps>;
export default ToolBar;
