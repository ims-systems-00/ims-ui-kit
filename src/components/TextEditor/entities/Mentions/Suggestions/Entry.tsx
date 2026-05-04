import React, { useCallback } from "react";
import { MentionSuggestion } from "../../../types";

// Define the props type for the Entry component
export interface EntryProps {
  name: string; // Required name property
  profileImageSrc: string; // Optional profile image source
  _id: string; // Required ID property
  onSelect?: (entry: MentionSuggestion) => void; // Optional select handler
}

// Functional component using the defined props type
const Entry: React.FC<EntryProps> = ({
  name,
  profileImageSrc,
  _id,
  onSelect = () => {},
}) => {
  const handleSelect = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      onSelect({ name, profileImageSrc, _id });
    },
    [name, profileImageSrc, _id, onSelect]
  ); // Added dependencies for useCallback

  return (
    <div className="d-flex align-items-center">
      <div className="avatar mb-1">
        <img
          src={
            profileImageSrc ||
            "https://assets.imssystems.tech/images/system/avatar-placeholder.jpg"
          }
          alt={name}
        />
      </div>
      <div onClick={handleSelect} className="btn btn-link p-2 mb-1">
        {name}
      </div>
    </div>
  );
};

export default Entry;
