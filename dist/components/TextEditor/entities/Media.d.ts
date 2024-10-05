import React from "react";
interface MediaProps {
    type: string;
    data: Record<string, any>;
    editorControllers: Record<string, any>;
    [key: string]: any;
}
declare const Media: React.FC<MediaProps>;
export default Media;
