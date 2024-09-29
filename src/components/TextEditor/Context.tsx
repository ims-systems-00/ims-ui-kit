import React from "react";
import useTextEditor from "./useTextEditor";
import { TextEditorContextProps, TextEditorContextData } from "./types";
export const TextEditorContext = React.createContext<TextEditorContextData>({
  editorRef: null,
  editorState: null,
  computedPosForMentionSuggestions: null,
  focusedForEditing: null,
  getFileInputProps: () => {},
  generateLink: () => {},
  handleDroppedFiles: () => {},
  handlePastedFiles: () => {},
  handleEditorStateChange: () => {},
  handleKeyCommand: () => {},
  handleToolClick: () => {},
  forceFocusEditorEnd: () => {},
  updateComputedPosForMentionSuggestions: () => {},
  handleMentionSelect: () => {},
  activateEditor: () => {},
  deactivateEditor: () => {},
  isToolActive: () => {},
  mentionSuggestions: [],
});
const TextEditorContextProvider: React.FC<TextEditorContextProps> = ({
  children,
  ...rest
}) => {
  let { ...editorUtils } = useTextEditor({
    onEachFileSelection: rest.onEachFileSelection || async function () {},
    mediaLinkGeneratorFn: rest.mediaLinkGeneratorFn || async function () {},
    onDataStructureChange: rest.onDataStructureChange || function () {},
    value: rest.value || null,
    readOnly: rest.readOnly,
  });
  return (
    <TextEditorContext.Provider
      value={{
        ...editorUtils,
        mentionSuggestions: rest.mentionSuggestions || [],
      }}
    >
      {children}
    </TextEditorContext.Provider>
  );
};
export default TextEditorContextProvider;
