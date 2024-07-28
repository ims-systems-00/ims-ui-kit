import { Button } from "reactstrap";
import React, { useCallback } from "react";
import { ENTITY_NAME } from "../entityNames";
import classNames from "classnames";
import { FaAlignRight, FaAlignJustify, FaAlignLeft } from "react-icons/fa";
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
export default function Aligner({ editorRef, onAlignmentChange, ...rest }) {
  let handleAlignment = useCallback(
    ({ alignment }) => {
      onAlignmentChange && onAlignmentChange({ alignment });
      let entityKey = rest.block.getEntityAt(0);
      rest.contentState.mergeEntityData(entityKey, { alignment: alignment });
    },
    [onAlignmentChange]
  );
  return (
    <div className="d-inline-block shadow-md rounded mb-1">
      {alignTools.map((tool) => {
        return (
          <Button
            title={tool?.label}
            type="button"
            className={classNames("btn btn-icon m-0 text-muted", {})}
            key={tool?.style}
            onClick={(e) => handleAlignment({ alignment: tool?.style })}
          >
            {tool.icon || tool?.label}
          </Button>
        );
      })}
    </div>
  );
}
