import Button from "../ButtonBase";

const DarkBtn = ({}) => {
  return (
    <>
      <Button color="dark">Dark Button</Button>
      <br /> <br />
      <Button outline color="dark">
        Dark Button
      </Button>
    </>
  );
};

export default DarkBtn;
DarkBtn.parameters = {
  docs: {
    description: {
      story: `
It is dark button
`,
    },
  },
};
