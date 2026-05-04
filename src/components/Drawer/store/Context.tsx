import React from "react";
import useDocumentStore, { DrawerStore } from "./useDrawerStore";

interface DrawerContextProps {
  children: React.ReactNode;
}

interface DrawerContextValue extends DrawerStore {}

export const DrawerContext =
  React.createContext<DrawerContextValue | undefined>(undefined);

const DrawerContextProvider: React.FC<DrawerContextProps> = ({
  children,
  ...rest
}) => {
  let { ...store } = useDocumentStore({});
  return (
    <DrawerContext.Provider
      value={{
        ...store,
      }}
      {...rest}
    >
      {children}
    </DrawerContext.Provider>
  );
};
export default DrawerContextProvider;
