import Button from "../ButtonBase";

const DisabledButton = ({}) => {
  return (
    <>
      <div>
        <h2>Primary Disabled Buttons</h2>
        <Button disabled color="primary">
          Primary Button
        </Button>
        <br /> <br />
        <Button disabled outline color="primary">
          Primary Button
        </Button>
        <br /> <br />
        <Button disabled outline color="primary" className="border border-0">
          Primary Button
        </Button>
        <br /> <br />
        <Button disabled color="success">
          Success Button
        </Button>
        <br /> <br />
        <Button disabled outline color="success">
          Success Button
        </Button>
        <br /> <br />
        <Button disabled outline color="success" className="border border-0">
          Success Button
        </Button>
        <br /> <br />
        <Button disabled color="info">
          Info Button
        </Button>
        <br /> <br />
        <Button disabled outline color="info">
          Info Button
        </Button>
        <br /> <br />
        <Button disabled outline color="info" className="border border-0">
          Info Button
        </Button>
      </div>
      <br /> <br /> <br /> <br />
      <div>
        <h2>Secondary Disabled Buttons</h2>
        <Button disabled>Default Button</Button>
        <br /> <br />
        <Button disabled outline color="secondary">
          Secondary Button
        </Button>
        <br /> <br />
        <Button disabled outline color="secondary" className="border border-0">
          Secondary Button
        </Button>
        <br /> <br />
        <Button disabled color="light">
          Light Button
        </Button>
        <br /> <br />
        <Button disabled outline color="light">
          Light Button
        </Button>
        <br /> <br />
        <Button disabled outline color="light" className="border border-0">
          Light Button
        </Button>
      </div>
      <br /> <br /> <br /> <br />
      <div>
        <h2>Danger Disabled Buttons</h2>
        <Button disabled color="danger">
          Danger Button
        </Button>
        <br /> <br />
        <Button disabled outline color="danger">
          Danger Button
        </Button>
        <br /> <br />
        <Button disabled outline color="danger" className="border border-0">
          Danger Button
        </Button>
        <br /> <br />
        <Button disabled color="warning">
          Warning Button
        </Button>
        <br /> <br />
        <Button disabled outline color="warning">
          Warning Button
        </Button>
        <br /> <br />
        <Button disabled outline color="warning" className="border border-0">
          Warning Button
        </Button>
      </div>
    </>
  );
};

export default DisabledButton;
DisabledButton.parameters = {
  docs: {
    description: {
      story: `
It is primary button
`,
    },
  },
};
