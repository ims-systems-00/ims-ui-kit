import { Button } from "../../../../index";
import ImsInputSelectBase from "../ImsInputSelect";
import React from "react";

const ImsInputSelect = ({}) => {
  return (
    <>
      <ImsInputSelectBase
        label="Label Text"
        onChange={(e) => console.log(e)}
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        sideBtn={
          <Button
            color="link"
            className="btn-link-dark"
            onClick={() => {
              alert("Create A New Ticket");
            }}
          >
            <i class="fa-solid fa-plus" style={{ fontSize: "16px" }} />
          </Button>
        }
        defaultOpt="Select Option"
      />
    </>
  );
};

export default ImsInputSelect;
