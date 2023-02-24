import React from "react";
import Card from "../CardBase";
import CardHeader from "../CardHeaderBase";
import CardBody from "../CardBodyBase";
import CardFooter from "../CardFooterBase";

const Examples = ({}) => {
  return (
    <Card>
      <CardHeader>Hello world </CardHeader>
      <CardBody>Description here</CardBody>
      <CardFooter>Footer here</CardFooter>
    </Card>
  );
};

export default Examples;
Examples.parameters = {
  docs: {
    description: {
      story: `
Example of constructed card view 
`,
    },
  },
};
