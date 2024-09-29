import React from "react";
import { ContentState, Block } from "draft-js";
interface ProcessedMediaProps {
    block: Block;
    contentState: ContentState;
}
export declare const editorMediaBlockRenderer: (block: Block) => {
    component: React.FC<ProcessedMediaProps>;
    editable: boolean;
} | null;
declare const ProcessedMedia: React.FC<ProcessedMediaProps>;
export default ProcessedMedia;
