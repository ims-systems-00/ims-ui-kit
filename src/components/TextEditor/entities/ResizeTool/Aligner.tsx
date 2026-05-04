import { Button } from "reactstrap";
import React, { useCallback } from "react";
import { ENTITY_NAME } from "../entityNames";
import classNames from "classnames";
import { FaAlignRight, FaAlignJustify, FaAlignLeft } from "react-icons/fa";

export interface AlignerProps {
  editorRef?: React.RefObject<any>;
  onAlignmentChange?: (alignment: { alignment: string }) => void;
  block: any; // You can replace `any` with a more specific type if you know the block structure
  contentState: any; // You can replace `any` with a more specific type for `contentState`
}

const alignTools = [
  {
    label: "Align left",
    style: ENTITY_NAME.ALIGN_LEFT,
    icon: <FaAlignLeft />,
  },
  {
    label: "Align center",
    style: ENTITY_NAME.ALIGN_CENTER,
    icon: <FaAlignJustify />,
  },
  {
    label: "Align right",
    style: ENTITY_NAME.ALIGN_RIGHT,
    icon: <FaAlignRight />,
  },
];

const Aligner: React.FC<AlignerProps> = ({
  editorRef,
  onAlignmentChange,
  ...rest
}) => {
  const handleAlignment = useCallback(
    ({ alignment }: { alignment: string }) => {
      if (onAlignmentChange) {
        onAlignmentChange({ alignment });
      }
      const entityKey = rest.block.getEntityAt(0);
      rest.contentState.mergeEntityData(entityKey, { alignment });
    },
    [onAlignmentChange, rest.block, rest.contentState]
  );

  return (
    <div className="d-inline-block shadow-md rounded mb-1">
      {alignTools.map((tool) => (
        <Button
          title={tool.label}
          type="button"
          className={classNames("btn btn-icon m-0 text-muted")}
          key={tool.style}
          onClick={() => handleAlignment({ alignment: tool.style })}
        >
          {tool.icon || tool.label}
        </Button>
      ))}
    </div>
  );
};

export default Aligner;
