import { ContentBlock, ContentState } from "draft-js";
/**
 * This function defines the strategy for identifying mentions in the Draft.js editor.
 *
 * @param contentBlock - Draft.js sends a contentBlock to handle state
 * @param callback - Draft.js sends a callback to handle state
 * @param contentState - This Draft.js parameter is not utilized at the moment
 */
export declare function mentionStrategy(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState): void;
