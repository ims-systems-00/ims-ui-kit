import Button from "../ButtonBase";

const BtnsSize = ({}) => {
  return (
    <>
      <Button size="lg">Large Button</Button>
      <br /> <br />
      <Button>Regular Button</Button>
      <br /> <br />
      <Button size="sm">Small Button</Button>
      <br /> <br />
      <Button size="lg" outline>
        Large Button
      </Button>
      <br /> <br />
      <Button outline>Regular Button</Button>
      <br /> <br />
      <Button size="sm" outline>
        Small Button
      </Button>
    </>
  );
};

export default BtnsSize;
BtnsSize.parameters = {
  docs: {
    description: {
      story: `
It is button with sizes (sm, lg)
`,
    },
  },
};
