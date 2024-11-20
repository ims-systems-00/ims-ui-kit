import React from "react";
import { ContentState } from "draft-js";
interface ProcessedMediaProps {
    block: any;
    contentState: ContentState;
}
export declare const editorMediaBlockRenderer: (block: any) => {
    component: React.FC<ProcessedMediaProps>;
    editable: boolean;
} | null;
declare const ProcessedMedia: React.FC<ProcessedMediaProps>;
export default ProcessedMedia;
