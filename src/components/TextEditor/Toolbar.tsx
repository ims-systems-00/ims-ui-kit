import React, { useContext, MouseEvent } from "react";
import { TextEditorContext } from "./Context";
import toolTypes from "./toolTypes";
import ButtonSeparator from "./ButtonSeparator";
import { Button } from "reactstrap";
import FilePicker from "./FilePicker";
import classNames from "classnames";
import { GoPaperAirplane } from "react-icons/go";
type ToolTypeKey = keyof typeof toolTypes;
const toolGroups: ToolTypeKey[] = Object.keys(toolTypes) as ToolTypeKey[];
export interface ToolBarProps {
  minimal?: boolean; // Optional prop to control minimal mode
  enableSubmit?: boolean; // Optional prop to enable/disable submit button
  onSubmit?: (e: MouseEvent<HTMLButtonElement>, editorState: any) => void; // Callback function when submitting
}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const {
    editorState,
    getFileInputProps,
    isToolActive,
    handleToolClick,
    focusedForEditing,
  } = useContext(TextEditorContext);

  return (
    <>
      <FilePicker {...getFileInputProps()} />
      {toolGroups
        .filter((item) => {
          if (props.minimal) {
            return item !== "ENTITY_TYPES";
          }
          return true;
        })
        .map((type: ToolTypeKey, index) => {
          return (
            <React.Fragment key={type}>
              {toolTypes[type]?.map((tool) => {
                return (
                  <Button
                    title={tool?.label}
                    type="button"
                    color="link"
                    className={classNames("text-toolbar-btn", {
                      "text-muted": !focusedForEditing,
                      "text-secondary": focusedForEditing,
                      "text-primary": isToolActive(tool) && focusedForEditing,
                    })}
                    key={tool?.style}
                    onMouseDown={(e) => handleToolClick(tool, e)}
                  >
                    {tool.icon ? (
                      <span
                        className={classNames("", {
                          "text-primary": isToolActive(tool),
                        })}
                      >
                        {tool.icon}
                      </span>
                    ) : (
                      tool?.label
                    )}
                  </Button>
                );
              })}
              {index < toolGroups.length - 1 && <ButtonSeparator />}
            </React.Fragment>
          );
        })}
      {props.enableSubmit && (
        <Button
          color="success"
          className="text-toolbar-btn px-2 pull-right"
          onClick={(e) => {
            if (typeof props.onSubmit === "function")
              props.onSubmit(e, editorState);
          }}
        >
          <GoPaperAirplane />
        </Button>
      )}
    </>
  );
};

export default ToolBar;
