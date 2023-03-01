import React from "react";
import { Card } from "reactstrap";
import ImsSimpleTable from "./ImsSimpleTable";
import { data } from "./data.js";
const TableInaCard = ({ children }) => {
  return (
    <Card>
      <ImsSimpleTable active striped thead={data.thead} tbody={data.tbody} />
    </Card>
  );
};

export default TableInaCard;
TableInaCard.parameters = {
  docs: {
    description: {
      story: `
Following is rendered in a  card component to provide border control
`,
    },
  },
};
