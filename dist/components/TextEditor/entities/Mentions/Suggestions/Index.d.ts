import React from "react";
import { MentionSuggestion } from "../../../types";
interface MentionSuggestionsProps {
    suggestions: MentionSuggestion[];
    onSelect?: (entry: MentionSuggestion) => void;
}
declare const MentionSuggestions: React.FC<MentionSuggestionsProps>;
export default MentionSuggestions;
