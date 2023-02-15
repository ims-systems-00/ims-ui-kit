import Button from "../ButtonBase";

const PrimaryBtn = ({}) => {
  return (
    <>
      <Button color="primary">Primary Button</Button>
      <br /> <br />
      <Button outline color="primary">
        Primary Button
      </Button>
      <br /> <br />
      <Button color="success">Success Button</Button>
      <br /> <br />
      <Button outline color="success">
        Primary Button
      </Button>
      <br /> <br />
      <Button color="info">Info Button</Button>
      <br /> <br />
      <Button outline color="info">
        Info Button
      </Button>
    </>
  );
};

export default PrimaryBtn;
PrimaryBtn.parameters = {
  docs: {
    description: {
      story: `
It is primary button
`,
    },
  },
};
