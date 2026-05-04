import { Meta, StoryFn } from "@storybook/react/*";
import DefaultPagination from "../Examples/DefaultPagination";
declare const _default: Meta<typeof DefaultPagination>;
export default _default;
declare const Template: StoryFn<typeof DefaultPagination>;
export { Template as Pagination };
export { default as PaginationWithIcon } from "../Examples/PaginationWithIcon";
