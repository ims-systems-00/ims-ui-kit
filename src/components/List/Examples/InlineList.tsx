import React from "react";
import List from "../ListBase";
import ListInlineItem from "../ListInlineItemBase";

const InlineList = () => {
  return (
    <List type="inline">
      <ListInlineItem>Samin</ListInlineItem>
      <ListInlineItem>Saifur</ListInlineItem>
      <ListInlineItem>Riad</ListInlineItem>
      <ListInlineItem>Rafee</ListInlineItem>
      <ListInlineItem>Ravi</ListInlineItem>
    </List>
  );
};

export default InlineList;
