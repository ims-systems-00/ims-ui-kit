import React from "react";
import ListGroup from "../ListGroupBase";
import ListGroupItem from "../ListGroupItemBase";
import ListGroupItemHeading from "../ListGroupItemHeadingBase";
import ListGroupItemText from "../ListGroupItemTextBase";

const GroupList = ({}) => {
  return (
    <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  );
};

export default GroupList;
