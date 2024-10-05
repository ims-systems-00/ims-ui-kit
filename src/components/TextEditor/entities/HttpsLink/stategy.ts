import { ContentBlock, ContentState } from "draft-js";
import { findWithRegex } from "../utils/findWithRegex";

const HANDLE_REGEX =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

/**
 * Strategy for finding URLs in the text
 *
 * @param contentBlock - Draft.js sends a ContentBlock to handle state
 * @param callback - Draft.js sends a callback to handle state
 * @param contentState - This Draft.js parameter is not utilized at the moment
 */
export function strategy(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}
