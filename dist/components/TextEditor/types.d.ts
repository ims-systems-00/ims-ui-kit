import { EditorState, EditorCommand, DraftHandleValue, SelectionState } from "draft-js";
import React, { SyntheticEvent } from "react";
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
    handleDroppedFiles(selection: SelectionState, files: Blob[]): DraftHandleValue;
    handlePastedFiles(files: Blob[]): DraftHandleValue;
    handleEditorStateChange(editorState: EditorState): void;
    handleKeyCommand(command: EditorCommand, editorState: EditorState, eventTimeStamp: number): DraftHandleValue;
    handleToolClick: Function;
    forceFocusEditorEnd: Function;
    updateComputedPosForMentionSuggestions: Function;
    handleMentionSelect: Function;
    activateEditor(e: SyntheticEvent): void;
    deactivateEditor(e: SyntheticEvent): void;
    isToolActive: Function;
}
export interface TextEditorContextData extends TextEditorUtils {
    mentionSuggestions: MentionSuggestion[];
}
