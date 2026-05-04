import React from "react";
import { TextEditorContextProps, TextEditorContextData } from "./types";
export declare const TextEditorContext: React.Context<TextEditorContextData>;
interface TextEditorProviderProps extends TextEditorContextProps {
    children: React.ReactNode;
}
declare const TextEditorContextProvider: React.FC<TextEditorProviderProps>;
export default TextEditorContextProvider;
