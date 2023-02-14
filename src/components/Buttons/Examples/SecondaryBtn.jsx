import Button from "../ButtonBase";

const SecondaryBtn = ({}) => {
  return (
    <>
      <Button>Default Button</Button>
      <br /> <br />
      <Button outline>Default Button</Button>
      <br /> <br />
      <Button color="secondary">Secondary Button</Button>
      <br /> <br />
      <Button outline color="secondary">
        Secondary Button
      </Button>
      <br /> <br />
      <Button color="light">Light Button</Button>
      <br /> <br />
      <Button outline color="light">
        Light Button
      </Button>
    </>
  );
};

export default SecondaryBtn;
SecondaryBtn.parameters = {
  docs: {
    description: {
      story: `
It is secondary button
`,
    },
  },
};
