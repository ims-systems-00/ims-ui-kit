import ButtonBase from "../../../Buttons/ButtonBase";
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
          <ButtonBase
            color="link"
            className="btn-link-dark"
            onClick={() => {
              alert("Create A New Ticket");
            }}
          >
            <i className="fa-solid fa-plus" style={{ fontSize: "16px" }} />
          </ButtonBase>
        }
        defaultOpt="Select Option"
      />
    </>
  );
};

export default ImsInputSelect;
