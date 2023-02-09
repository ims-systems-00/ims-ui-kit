import React from "react";
import { TextEditorContext } from "./Context";
import toolTypes from "./toolTypes";
import ButtonSeparator from "./ButtonSeparator";
import { Button } from "reactstrap";
import FilePicker from "./FilePicker";
import classNames from "classnames";
export default function ToolBar(props) {
  const { getFileInputProps, editorState, handleToolClick } =
    React.useContext(TextEditorContext);
  return (
    <>
      <FilePicker {...getFileInputProps()} />
      {Object.keys(toolTypes).map((type, index) => {
        return (
          <React.Fragment key={type}>
            {toolTypes[type]?.map((tool) => {
              return (
                <Button
                  title={tool?.label}
                  // type="button"
                  className={"btn btn-icon text-muted m-0"}
                  key={tool?.style}
                  onClick={(e) => handleToolClick(tool)}
                >
                  {tool.icon ? (
                    <i
                      className={classNames(tool.icon, {
                        "text-primary":
                          editorState
                            .getCurrentInlineStyle()
                            .has(tool?.style) ||
                          editorState
                            ?.getCurrentContent()
                            .getBlockForKey(
                              editorState?.getSelection().getStartKey()
                            )
                            .getType() === tool?.style,
                      })}
                    />
                  ) : (
                    tool?.label
                  )}
                </Button>
              );
            })}
            {index < Object.keys(toolTypes).length - 1 && <ButtonSeparator />}
          </React.Fragment>
        );
      })}
    </>
  );
}
