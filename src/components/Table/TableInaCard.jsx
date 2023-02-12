import React from "react";
import { Card } from "reactstrap";
import ImsSimpleTable from "./ImsSimpleTable";
import data from "./data.json";
const TableInaCard = ({ children }) => {
  return (
    <Card>
      <ImsSimpleTable thead={data.thead} tbody={data.tbody} />
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
