import React from "react";
export interface AlignerProps {
    editorRef?: React.RefObject<any>;
    onAlignmentChange?: (alignment: {
        alignment: string;
    }) => void;
    block: any;
    contentState: any;
}
declare const Aligner: React.FC<AlignerProps>;
export default Aligner;
