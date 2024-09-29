import React from "react";
interface ResizerProps {
    editorRef: React.RefObject<any>;
    children?: React.ReactNode;
    size?: number;
    alignment?: string | "start" | "center" | "end";
    block: any;
    contentState: any;
}
declare const Resizer: React.FC<ResizerProps>;
export default Resizer;
