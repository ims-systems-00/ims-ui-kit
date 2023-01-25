import FileDropZone from "./FileDropZone";
const Example = ({}) => {
  return (
    <>
      <FileDropZone hint="Your customised hit here." />
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
