import Button from "../ButtonBase";

const DangerBtn = ({}) => {
  return (
    <>
      <Button color="danger">Danger Button</Button>
      <br /> <br />
      <Button outline color="danger">
        Danger Button
      </Button>
      <br /> <br />
      <Button color="warning">Warning Button</Button>
      <br /> <br />
      <Button outline color="warning">
        Warning Button
      </Button>
    </>
  );
};

export default DangerBtn;
DangerBtn.parameters = {
  docs: {
    description: {
      story: `
It is danger button
`,
    },
  },
};
