import React from "react";
import { MentionSuggestion } from "../../../types";
export interface EntryProps {
    name: string;
    profileImageSrc: string;
    _id: string;
    onSelect?: (entry: MentionSuggestion) => void;
}
declare const Entry: React.FC<EntryProps>;
export default Entry;
