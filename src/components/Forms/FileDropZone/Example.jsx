import { Button, Input } from "reactstrap";
import FileDropZone from "./FileDropZone";
const Example = ({}) => {
  return (
    <>
      <Input type="text" />
      <br />
      <FileDropZone hint="Your customised hit here." />
      <Button>Submit</Button>
    </>
  );
};
export default Example;
Example.parameters = {
  docs: {
    description: {
      story: `
Dropzone with custom hint
`,
    },
  },
};
