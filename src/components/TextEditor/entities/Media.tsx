import React from "react";
import Image from "./Image";
import Divider from "./Divider";
import CheckListItem from "./CheckListItem";
import { ENTITY_NAME } from "./entityNames";
import Resizer from "./ResizeTool/Index";

// Define the props type for the Media component
interface MediaProps {
  type: string; // The type of media (e.g., ENTITY_NAME.IMAGE)
  data: Record<string, any>; // Data related to the media item
  editorControllers: Record<string, any>; // Editor controllers passed to the component
  [key: string]: any; // Allow additional props
}

// Functional component using the defined props type
const Media: React.FC<MediaProps> = ({
  type,
  data,
  editorControllers,
  ...rest
}) => {
  let media = null;
  let toolProperties = { ...data, ...editorControllers, ...rest };

  if (type === ENTITY_NAME.IMAGE) {
    media = (
      <Resizer {...toolProperties}>
        <Image {...data} />
      </Resizer>
    );
  }
  if (type === ENTITY_NAME.DIVIDER) {
    media = <Divider {...data} />;
  }
  if (type === ENTITY_NAME.CHECKLIST) {
    media = <CheckListItem text={data.text} />;
  }

  return media;
};

export default Media;
