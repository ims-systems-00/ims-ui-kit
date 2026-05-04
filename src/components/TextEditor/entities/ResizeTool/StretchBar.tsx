import classnames from "classnames";
import React, { useCallback, useState } from "react";

interface StretchBarProps {
  editorRef: React.RefObject<any>;
  onResizeEnd?: (event: { partition: number }) => void;
  reference?: string | "start" | "center" | "end";
  currentSize?: number;
  block: any; // More specific typing for block can be added if known
  contentState: any; // More specific typing for contentState can be added if known
}

const partitions = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

const StretchBar: React.FC<StretchBarProps> = ({
  editorRef,
  onResizeEnd,
  reference = "start",
  currentSize = 10,
  ...rest
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentlyHovering, setCurrentlyHovering] = useState(currentSize);

  const editorRect = editorRef.current?.editor?.getBoundingClientRect();

  const getGuidePositions = () => {
    const editorPaddingOffset = parseInt(
      window
        .getComputedStyle(
          document.querySelector(".draft-editor-container") as Element,
          null
        )
        .getPropertyValue("padding-left")
    );

    return partitions.map((part) => {
      const offset = (editorRect.width * part) / 100;
      return {
        percentage: part,
        pixels: Math.ceil(offset),
      };
    });
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      const doDrag = (e: MouseEvent) => {
        let partitionsCopy = [...partitions];
        setIsDragging(true);

        let fullLength =
          reference === "center" ? editorRect.width / 2 : editorRect.width;
        let refLine =
          reference === "center"
            ? editorRect.left + editorRect.width / 2
            : reference === "end"
            ? editorRect.left + editorRect.width
            : editorRect.left;

        let calculatedOffsetX = parseInt(
          Math.abs(e.clientX - refLine).toString()
        );
        let needle = parseInt(
          ((calculatedOffsetX / fullLength) * 100).toString()
        );

        partitionsCopy.sort((a, b) => {
          return Math.abs(needle - a) - Math.abs(needle - b);
        });

        let resizedTo = partitionsCopy[0];
        setCurrentlyHovering(resizedTo);

        let createdEvent = { partition: resizedTo };
        if (onResizeEnd) onResizeEnd(createdEvent);

        let entityKey = rest.block.getEntityAt(0);
        rest.contentState.mergeEntityData(entityKey, { size: resizedTo });
      };

      const stopDrag = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", doDrag, false);
        document.removeEventListener("mouseup", stopDrag, false);
      };

      document.addEventListener("mousemove", doDrag, false);
      document.addEventListener("mouseup", stopDrag, false);
    },
    [onResizeEnd, editorRect, reference, rest.block, rest.contentState]
  );

  return (
    <>
      <div
        className="d-inline-block p-2 unselectable"
        style={{ cursor: "col-resize" }}
        onMouseDown={handleMouseDown}
      >
        <div className="bg-primary rounded resize-bar"></div>
      </div>

      {isDragging && (
        <div className="resize-guides-container position-absolute">
          {getGuidePositions().map((guide) => (
            <div
              key={guide.pixels}
              className={classnames("resize-guide position-absolute rounded", {
                "bg-info":
                  (reference === "start" &&
                    guide.percentage === currentlyHovering) ||
                  (reference === "end" &&
                    100 - guide.percentage === currentlyHovering),
              })}
              style={{
                left: `${guide.pixels}px`,
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

export default StretchBar;
