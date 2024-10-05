import React, { useContext } from "react";
import usePreRenderProcessing from "./usePreRenderProcessing";
import { TextEditorContext } from "../Context";
import Media from "./Media";
import { ContentState } from "draft-js"; // Assuming you are using Draft.js types

// Define the props type for ProcessedMedia
interface ProcessedMediaProps {
  block: any; // Type of the block
  contentState: ContentState; // Type of the content state
}

// Renderer function for media blocks
export const editorMediaBlockRenderer = (block: any) => {
  if (block.getType() === "atomic") {
    return {
      component: ProcessedMedia,
      editable: false,
    };
  }
  return null;
};

// ProcessedMedia functional component
const ProcessedMedia: React.FC<ProcessedMediaProps> = (props) => {
  const entityKey = props.block.getEntityAt(0);
  const entity = entityKey && props.contentState.getEntity(entityKey);
  const type = entity?.getType();

  const { generateLink, ...rest } = useContext(TextEditorContext);

  // Process the entity data
  let processedResults = usePreRenderProcessing({
    generateLink,
    ...entity?.getData(),
  });

  return (
    <Media
      type={type}
      data={{
        ...entity?.getData(),
        ...processedResults,
      }}
      editorControllers={{ ...rest }}
      {...props}
    />
  );
};

export default ProcessedMedia;
