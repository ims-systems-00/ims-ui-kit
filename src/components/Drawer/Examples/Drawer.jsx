import React from "react";
import Button from "../../Buttons/ButtonBase";
import { DrawerContextProvider, DrawerOpener, DrawerRight } from "../index";

const DrawerExample = ({}) => {
  return (
    <DrawerContextProvider>
      <DrawerOpener drawerId="some-unique-name-like-user-form-drawer">
        <Button>Open</Button>
      </DrawerOpener>
      <DrawerRight drawerId="some-unique-name-like-user-form-drawer">
        <p className="text-center">content here</p>
      </DrawerRight>
    </DrawerContextProvider>
  );
};

export default DrawerExample;
