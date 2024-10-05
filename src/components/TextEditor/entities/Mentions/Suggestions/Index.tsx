import React, { useContext } from "react";
import { TextEditorContext } from "../../../Context";
import Entry, { EntryProps } from "./Entry";
import { MentionSuggestion } from "../../../types";

// Define the props type for MentionSuggestions component
interface MentionSuggestionsProps {
  suggestions: MentionSuggestion[];
  onSelect?: (entry: MentionSuggestion) => void; // Optional select handler
}

// Functional component using the defined props type
const MentionSuggestions: React.FC<MentionSuggestionsProps> = ({
  suggestions,
  ...rest
}) => {
  const { computedPosForMentionSuggestions } = useContext(TextEditorContext);

  return (
    <>
      {suggestions.length ? (
        <div
          className="mention-suggestions position-absolute mt-4 p-2 shadow-md"
          style={{ ...computedPosForMentionSuggestions }}
        >
          {suggestions.map((suggestion, index) => {
            return (
              <Entry
                key={suggestion.name + index} // Unique key for each entry
                {...suggestion} // Spread the suggestion properties
                {...rest} // Spread additional props
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MentionSuggestions;
