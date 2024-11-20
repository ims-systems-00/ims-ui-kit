import { ReactNode } from "react";
interface ToolType {
    label: string;
    style: string;
    icon: ReactNode;
    element: string;
}
export declare const INLINE_TYPES: ToolType[];
export declare const BLOCK_TYPES: ToolType[];
export declare const ENTITY_TYPES: ToolType[];
declare const toolType: {
    INLINE_TYPES: ToolType[];
    BLOCK_TYPES: ToolType[];
    ENTITY_TYPES: ToolType[];
};
export default toolType;
