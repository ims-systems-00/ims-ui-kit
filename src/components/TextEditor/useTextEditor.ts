import React, { useState, useEffect, useRef } from "react";
import {
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertToRaw,
  convertFromRaw,
  ContentState,
  CompositeDecorator,
  Modifier,
  SelectionState,
  DraftHandleValue,
  Editor,
} from "draft-js";
import { ELEMENT_TYPES } from "./elementTypes";
import { ENTITY_NAME } from "./entities/entityNames";
import { mentionDecorator } from "./entities/Mentions";
import { httpsLinkDecorator } from "./entities/HttpsLink";
import { TextEditorUtils } from "./types";
const compositeDecorator = new CompositeDecorator([
  mentionDecorator,
  httpsLinkDecorator,
]);
export default function useTextEditor(config: any): TextEditorUtils {
  const editorRef = useRef<Editor | null>(null);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(compositeDecorator)
  );
  const [focusedForEditing, setFocusedForEditing] = useState(false);
  const [
    computedPosForMentionSuggestions,
    setComputedPosForMentionSuggestions,
  ] = useState({ display: "none" });
  const updateComputedPosForMentionSuggestions = (position: any) =>
    setComputedPosForMentionSuggestions(position);
  /**
   * the following effect block handles if the component is being
   * controlled by outside values.
   */
  const activateEditor = () => setFocusedForEditing(true);
  const deactivateEditor = () => setFocusedForEditing(false);

  function stateController() {
    let currentContent;
    try {
      if (typeof config.value === "string") {
        currentContent = JSON.parse(config.value);
      }
      if (typeof config.value === "object") {
        currentContent = config.value;
      }
    } catch (err) {
      console.log(err);
      /**
       * here we are handling if the content parsing failes because if preexisting
       * plain text, we are converting that into a draft data structure for future
       * this is usefull for handling legacy data or automatic migration to draft data
       * structure
       */
      if (typeof config.value === "string")
        return handleEditorStateChange(
          EditorState.createWithContent(
            ContentState.createFromText(config.value)
          )
        );
    }
    if (config.value || currentContent) {
      const stateWithContent = EditorState.createWithContent(
        convertFromRaw(currentContent),
        compositeDecorator
      );
      const currentSelection = editorState.getSelection();
      const stateWithContentAndSelection = EditorState.forceSelection(
        stateWithContent,
        currentSelection
      );
      return handleEditorStateChange(stateWithContentAndSelection);
    }
    return handleEditorStateChange(EditorState.createEmpty(compositeDecorator));
  }
  useEffect(() => {
    if (config.readOnly) {
      return stateController();
    }
    if (!config.value) {
      return handleEditorStateChange(
        EditorState.createEmpty(compositeDecorator)
      );
    }
    return stateController();
  }, [config.value]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const _openFilePrompt = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const _createAtomicBlockEntity = (command: any, data: any) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      command,
      "IMMUTABLE",
      { ...data }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    handleEditorStateChange(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
  };
  /**
   * this function allows this component user to define own link generator.
   * usefull if someone wants to preprocess a file through a backend before
   * using as am image src or achor href
   * @param {*} metaData
   * @returns {Promise}
   */
  const generateLink = async (metaData: any) => {
    if (
      !config.mediaLinkGeneratorFn ||
      typeof config.mediaLinkGeneratorFn !== "function"
    )
      return null;
    return config.mediaLinkGeneratorFn(metaData);
  };
  /**
   * this function updates editors state for the current instance of the component
   * @param {EditorState} editorState
   */
  const handleEditorStateChange = (editorState: any) => {
    const contentState = editorState.getCurrentContent();
    setEditorState(editorState);
    // console.log(JSON.stringify(convertToRaw(contentState)));
    // check if contentState has text or entity or block data to decide if we should send data to parent component or not to avoid unnecessary re-rendering
    config.onDataStructureChange(JSON.stringify(convertToRaw(contentState)));
  };
  const handleKeyCommand = (command: any, editorState: any) => {
    let newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorStateChange(newState);
      return "handled";
    }
    return "not-handled";
  };
  const _handleFiles = async (files: Blob[]): Promise<DraftHandleValue> => {
    if (
      !config.onEachFileSelection ||
      typeof config.onEachFileSelection !== "function"
    ) {
      console.log("Uploader function not specified");
      return "not-handled";
    }
    let areImages = files.every(
      (file: any) => file.type.split("/")[0] === "image"
    );
    /** todo: check file size here */
    if (!areImages) {
      console.log("All files has to be images");
      return "not-handled";
    }
    try {
      let storageInformations = await Promise.all(
        files.map((file: any) => config.onEachFileSelection(file))
      );
      if (!storageInformations.every((storageInfo) => storageInfo))
        console.log("one or mutiple files don't have storage info");
      storageInformations.map((storageInfo) =>
        _createAtomicBlockEntity(ENTITY_NAME.IMAGE, {
          storageInfo,
        })
      );
      return "handled";
    } catch (err) {
      console.log(err);
      return "not-handled";
    }
  };
  const _handleFileInputChange = (e: any) => {
    e.preventDefault();
    let files = e.target.files;
    _handleFiles(Array.from(files));
  };
  const getFileInputProps = () => ({
    ref: fileInput,
    onChange: _handleFileInputChange,
  });
  const _atomicEntityController = {
    [ENTITY_NAME.IMAGE]: _openFilePrompt,
    [ENTITY_NAME.LINK]: () => {},
    [ENTITY_NAME.DIVIDER]: () =>
      _createAtomicBlockEntity(ENTITY_NAME.DIVIDER, {}),
    [ENTITY_NAME.MENTION]: () => {},
    [ENTITY_NAME.CHECKLIST]: () => {
      _createAtomicBlockEntity(ENTITY_NAME.CHECKLIST, {});
    },
  };
  const _buttonHandlers = {
    [ELEMENT_TYPES.INLINE_DEFAULT]: (command: string) =>
      handleEditorStateChange(
        RichUtils.toggleInlineStyle(editorState, command)
      ),
    [ELEMENT_TYPES.BLOCK_DEFAULT]: (command: string) =>
      handleEditorStateChange(RichUtils.toggleBlockType(editorState, command)),
    [ELEMENT_TYPES.ATOMIC_ENTITY]: (command: string) => {
      _atomicEntityController[command]();
    },
  };
  const handleToolClick = (tool: any, e: any) => {
    e.preventDefault();
    if (!editorState.getSelection().getHasFocus()) return null;
    if (!tool?.element) return null;
    _buttonHandlers[tool.element](tool.style);
  };
  const handleDroppedFiles = (
    selection: SelectionState,
    files: Blob[]
  ): DraftHandleValue => {
    _handleFiles(files);
    return "handled";
  };
  const handlePastedFiles = (files: Blob[]): DraftHandleValue => {
    _handleFiles(files);
    return "handled";
  };
  const handleMentionSelect = (
    contentState: any,
    blockKey: any,
    position: any,
    mentionData: any
  ) => {
    let selectionState = SelectionState.createEmpty(blockKey);
    let newContentState = contentState.createEntity(
      ENTITY_NAME.MENTION,
      "IMMUTABLE",
      {
        ...mentionData,
      }
    );
    let entityKey = newContentState.getLastCreatedEntityKey();
    newContentState = Modifier.replaceText(
      contentState,
      selectionState.merge({
        // The starting position of the range to be replaced.
        anchorOffset: position.start,
        // The end position of the range to be replaced.
        focusOffset: position.end,
      }),
      mentionData.mention,
      editorState.getCurrentInlineStyle(),
      entityKey
    );
    handleEditorStateChange(
      /**
       * in following solution we had to use moveFocusToEnd() and the force the
       * selecion back to replaced text from  new content through forceSelection().
       * This creates an effect that the cursor is at the end of mentioend name.
       * Draftjs has got an issue with cursor positioning with entity and modifier.
       * see issue : https://github.com/facebook/draft-js/issues/627
       *
       * otherwise expected behaviour is to only do an EditorState.set() to put the
       * mentioned entity in the editor in the identified selection state starting with @.
       */
      EditorState.forceSelection(
        EditorState.moveFocusToEnd(
          EditorState.set(editorState, { currentContent: newContentState })
        ),
        newContentState.getSelectionAfter()
      )
    );
  };
  const forceFocusEditorEnd = (e: any) => {
    e?.preventDefault && e.preventDefault();
    if (editorRef.current) {
      editorRef.current.editor?.focus();
    }
    if (editorState)
      handleEditorStateChange(EditorState.moveFocusToEnd(editorState));
  };
  const isToolActive = (tool: any) => {
    try {
      return (
        editorState?.getCurrentInlineStyle().has(tool?.style) ||
        editorState
          ?.getCurrentContent()
          .getBlockForKey(editorState?.getSelection().getStartKey())
          .getType() === tool?.style
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  return {
    editorRef,
    editorState,
    computedPosForMentionSuggestions,
    focusedForEditing,
    getFileInputProps,
    generateLink,
    handleDroppedFiles,
    handlePastedFiles,
    handleEditorStateChange,
    handleKeyCommand,
    handleToolClick,
    forceFocusEditorEnd,
    updateComputedPosForMentionSuggestions,
    handleMentionSelect,
    activateEditor,
    deactivateEditor,
    isToolActive,
  };
}