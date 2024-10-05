import React from "react";
import { Card } from "reactstrap";
import ImsSimpleTable from "./ImsSimpleTable.js";
import { data } from "./data";

const TableInaCard = () => {
  return (
    <Card>
      <ImsSimpleTable active striped thead={data.thead} tbody={data.tbody} />
    </Card>
  );
};

export default TableInaCard;
