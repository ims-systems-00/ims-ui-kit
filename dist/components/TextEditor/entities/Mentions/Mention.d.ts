import React from "react";
export interface MentionProps {
    entityKey?: string;
    contentState: any;
    blockKey: string;
    decoratedText: string;
    start: number;
    end: number;
    children: React.ReactNode;
}
declare const Mention: React.FC<MentionProps>;
export default Mention;
