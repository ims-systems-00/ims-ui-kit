import type { Meta, StoryFn } from "@storybook/react/*";
import React from "react";
import { RowSelectionState } from "@tanstack/react-table";
import DataTable, { TableProps } from "../DataTable";

const sampleData = [
  {
    id: "row-1",
    name: "Employee management policy",
    owner: "Reyad Hossain",
    createdAt: "2026-04-20",
    status: "Published",
  },
  {
    id: "row-2",
    name: "Fire risk assessment",
    owner: "Rafee Abdullah",
    createdAt: "2026-04-18",
    status: "Draft",
  },
  {
    id: "row-3",
    name: "Compliance management",
    owner: "Nuraz Zamal",
    createdAt: "2026-04-16",
    status: "Review",
  },
  {
    id: "row-4",
    name: "Non-disclosure agreement",
    owner: "Nurul Haque",
    createdAt: "2026-04-13",
    status: "Published",
  },
];

const sampleColumns = [
  {
    accessorKey: "name",
    header: "Document",
    size: 320,
  },
  {
    accessorKey: "owner",
    header: "Owner",
    size: 220,
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    size: 180,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 160,
  },
];

export default {
  title: "components/Table",
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component: `
DataTable uses TanStack table under the hood with support for row selection, column sizing and controlled visibility.
Use this story to test rendering, row click callbacks and selection behavior.
        `,
      },
    },
  },
} as Meta<typeof DataTable>;

const Template: StoryFn<typeof DataTable> = (args: TableProps) => {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  return <DataTable {...args} rowSelection={rowSelection} onRowSelectionChange={setRowSelection} />;
};

Template.args = {
  data: sampleData,
  columns: sampleColumns,
  tableKey: "docs-data-table",
  disableMultiSelection: false,
  disableColumnResize: false,
  defaultSize: 220,
  minSize: 120,
  columnVisibility: {},
  containerClass: "",
  onRowClick: (row: any) => {
    // Keep this lightweight for docs preview callbacks.
    // eslint-disable-next-line no-console
    console.log("Clicked row:", row.original);
  },
};

export { Template as DataTable };
