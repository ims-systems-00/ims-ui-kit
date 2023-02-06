import DefaultPagination from "../Examples/DefaultPagination";

export default {
  title: "components/Pagination",
  component: DefaultPagination,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Text](https://getbootstrap.com/docs/5.3/utilities/text/)
All our text are customised from the default bootstrap texts. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Paginations = DefaultPagination;

Paginations.args = {};

export { default as SeparatedPagination } from "../Examples/SeparatedPagination";
export { default as PaginationWithIcon } from "../Examples/PaginationWithIcon";
export { default as IndividualPagination } from "../Examples/IndividualPagination";
export { default as RouterPagination } from "../Examples/RouterPagination";
