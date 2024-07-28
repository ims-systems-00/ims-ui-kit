import React from "react";
import useTextEditor from "./useTextEditor";
export const TextEditorContext = React.createContext();
const TextEditorContextProvider = ({ children, ...rest }) => {
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
