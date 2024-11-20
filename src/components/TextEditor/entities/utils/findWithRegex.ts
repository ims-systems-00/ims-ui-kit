import { ContentBlock } from "draft-js";

export function findWithRegex(
  regex: RegExp,
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void
): void {
  const text = contentBlock.getText();
  let matchArr: RegExpExecArray | null;
  let start: number;

  // Iterate over the matches
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
