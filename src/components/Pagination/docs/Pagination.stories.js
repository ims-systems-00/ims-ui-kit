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

export { default as PaginationWithIcon } from "../Examples/PaginationWithIcon";
