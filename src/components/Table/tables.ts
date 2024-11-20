const tables = {
  default: [
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Business unit",
      accessor: "group",
    },
    {
      Header: "Title",
      accessor: "risk",
    },

    {
      Header: "Risk Score",
      accessor: "score",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Created on",
      accessor: "created_on",
    },
    {
      Header: "Risk owner",
      accessor: "owner",
    },

    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ],
  open: [
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Business unit",
      accessor: "group",
    },
    {
      Header: "Title",
      accessor: "risk",
    },

    {
      Header: "Risk Score",
      accessor: "score",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "created_on",
    },
    {
      Header: "Risk owner",
      accessor: "owner",
    },

    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ],
  escalated: [
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Business unit",
      accessor: "group",
    },
    {
      Header: "Title",
      accessor: "risk",
    },

    {
      Header: "Risk Score",
      accessor: "score",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "escalated_on",
    },
    {
      Header: "Risk owner",
      accessor: "owner",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ],
  mitigated: [
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Business unit",
      accessor: "group",
    },
    {
      Header: "Title",
      accessor: "risk",
    },

    {
      Header: "Risk Score",
      accessor: "score",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "mitigated_on",
    },
    {
      Header: "Risk owner",
      accessor: "owner",
    },

    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ],
  accepted: [
    {
      Header: "Reference",
      accessor: "ID",
    },
    {
      Header: "Business unit",
      accessor: "group",
    },
    {
      Header: "Title",
      accessor: "risk",
    },

    {
      Header: "Risk Score",
      accessor: "score",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "accepted_on",
    },
    {
      Header: "Risk owner",
      accessor: "owner",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      filterable: false,
    },
  ],
};

export default tables;
