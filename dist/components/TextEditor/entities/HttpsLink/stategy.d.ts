import { ContentBlock, ContentState } from "draft-js";
/**
 * Strategy for finding URLs in the text
 *
 * @param contentBlock - Draft.js sends a ContentBlock to handle state
 * @param callback - Draft.js sends a callback to handle state
 * @param contentState - This Draft.js parameter is not utilized at the moment
 */
export declare function strategy(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState): void;
