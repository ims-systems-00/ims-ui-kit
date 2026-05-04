import React from "react";
import { DrawerStore } from "./useDrawerStore";
interface DrawerContextProps {
    children: React.ReactNode;
}
interface DrawerContextValue extends DrawerStore {
}
export declare const DrawerContext: React.Context<DrawerContextValue | undefined>;
declare const DrawerContextProvider: React.FC<DrawerContextProps>;
export default DrawerContextProvider;
