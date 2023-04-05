import tables from "./tables";

const filters = [
  {
    value: "",
    label: "All risks",
    default: true,
    tableState: tables.default,
  },
  {
    value: { mitigated: { status: false } },
    label: "Open risks",
    tableState: tables.open,
  },
  {
    value: {
      escalated: { status: true },
      mitigated: { status: false },
      sort: "-escalated.on",
    },
    label: "Escalated risks",
    tableState: tables.escalated,
  },
  {
    value: { mitigated: { status: true }, sort: "-mitigated.on" },
    label: "Mitigated risks",
    tableState: tables.mitigated,
  },
  {
    value: { accepted: { status: true }, sort: "-accepted.on" },
    label: "Accepted risks",
    tableState: tables.accepted,
  },
];

export default filters;
