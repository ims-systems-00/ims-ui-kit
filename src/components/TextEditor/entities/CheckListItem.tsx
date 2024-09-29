import React from "react";

interface CheckListItemProps {
  text: string;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => {
  return <React.Fragment>{text}</React.Fragment>;
};

export default CheckListItem;
