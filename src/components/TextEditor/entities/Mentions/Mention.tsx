import React, { useEffect, useContext, useCallback, useRef } from "react";
import { TextEditorContext } from "../../Context";
import MentionSuggestions from "./Suggestions/Index";

// Define the props type for the Mention component
interface MentionProps {
  entityKey?: string; // Optional entity key
  contentState: any; // Type for contentState; adjust as needed based on actual type
  blockKey: string; // Required block key
  decoratedText: string; // Required decorated text
  start: number; // Required start position
  end: number; // Required end position
  children: React.ReactNode; // Children nodes
}

const Mention: React.FC<MentionProps> = (props) => {
  const mentionInputRef = useRef<HTMLSpanElement | null>(null);
  const {
    editorRef,
    mentionSuggestions,
    updateComputedPosForMentionSuggestions,
    handleMentionSelect,
  } = useContext(TextEditorContext);

  const computeStylePos = useCallback(() => {
    const editorRect = editorRef.current?.editor?.getBoundingClientRect();
    let leftSpace =
      editorRect.width - (mentionInputRef.current?.offsetLeft ?? 0) < 240
        ? (mentionInputRef.current?.offsetLeft ?? 0) - 230
        : mentionInputRef.current?.offsetLeft ?? 0;
    return {
      left: leftSpace,
      top: mentionInputRef.current?.offsetTop ?? 0,
      display: "block",
    };
  }, [editorRef]);

  const hideSuggestions = useCallback(() => {
    return {
      display: "none",
    };
  }, []);

  useEffect(() => {
    if (mentionInputRef.current) {
      updateComputedPosForMentionSuggestions(computeStylePos());
    }
  }, [computeStylePos, updateComputedPosForMentionSuggestions]);

  function retriveEntityData() {
    if (!props.entityKey) return null;
    const entity = props.contentState.getEntity(props.entityKey);
    return { ...entity?.getData() };
  }

  const entityData = retriveEntityData();

  return (
    <>
      {entityData ? (
        <a href={"/admin/users/" + entityData._id} className="text-primary">
          {entityData.name}
        </a>
      ) : (
        <span ref={mentionInputRef} className="">
          {props.children}
        </span>
      )}
      <MentionSuggestions
        suggestions={mentionSuggestions.filter((item) =>
          item.name
            .toLowerCase()
            .includes(
              props.decoratedText
                .slice(1, props.decoratedText.length)
                .toLowerCase()
            )
        )}
        onSelect={({ name, profileImageSrc, _id }) => {
          const userName = "@" + name.split(" ").join("_");
          handleMentionSelect(
            props.contentState,
            props.blockKey,
            { start: props.start, end: props.end },
            { mention: userName + " ", profileImageSrc, _id, name } // adding a trailing whitespace to create a smooth experience
          );
          updateComputedPosForMentionSuggestions(hideSuggestions());
        }}
      />
    </>
  );
};

export default Mention;
