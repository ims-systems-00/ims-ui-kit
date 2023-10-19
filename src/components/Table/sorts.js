import tables from "./tables";

const sorts = [
  {
    value: "",
    label: "By date",
    default: true,
    tableState: tables.default,
  },
  {
    value: { mitigated: { status: false } },
    label: "By sore",
    tableState: tables.open,
  },
  {
    value: {
      escalated: { status: true },
      mitigated: { status: false },
      sort: "-escalated.on",
    },
    label: "By Creation",
    tableState: tables.escalated,
  },
  {
    value: { mitigated: { status: true }, sort: "-mitigated.on" },
    label: "By Mitigated",
    tableState: tables.mitigated,
  },
  {
    value: { accepted: { status: true }, sort: "-accepted.on" },
    label: "By Acception",
    tableState: tables.accepted,
  },
];

export default sorts;
