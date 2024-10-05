import React from "react";
interface StretchBarProps {
    editorRef: React.RefObject<any>;
    onResizeEnd?: (event: {
        partition: number;
    }) => void;
    reference?: string | "start" | "center" | "end";
    currentSize?: number;
    block: any;
    contentState: any;
}
declare const StretchBar: React.FC<StretchBarProps>;
export default StretchBar;
