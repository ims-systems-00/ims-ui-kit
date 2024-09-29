import React from "react";
export interface MentionSuggestion {
    name: string;
    profileImageSrc: string;
    _id: string;
}
export interface TextEditorContextProps {
    onEachFileSelection?: Function;
    mediaLinkGeneratorFn?: Function;
    onDataStructureChange?: Function;
    value?: string | object;
    readOnly?: boolean;
    mentionSuggestions?: MentionSuggestion[];
    children: React.ReactNode;
}
export interface TextEditorUtils {
    editorRef: any;
    editorState: any;
    computedPosForMentionSuggestions: any;
    focusedForEditing: any;
    getFileInputProps: Function;
    generateLink: Function;
    handleDroppedFiles: Function;
    handlePastedFiles: Function;
    handleEditorStateChange: Function;
    handleKeyCommand: Function;
    handleToolClick: Function;
    forceFocusEditorEnd: Function;
    updateComputedPosForMentionSuggestions: Function;
    handleMentionSelect: Function;
    activateEditor: Function;
    deactivateEditor: Function;
    isToolActive: Function;
}
export interface TextEditorContextData extends TextEditorUtils {
    mentionSuggestions: MentionSuggestion[];
}
