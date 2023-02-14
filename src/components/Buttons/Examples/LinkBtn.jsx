import Button from "../ButtonBase";

const LinkBtn = ({}) => {
  return (
    <>
      <Button color="link">Default Link Button</Button>
      <Button color="link" className="btn-link-primary">
        Link Button
      </Button>
      <Button color="link" className="btn-link-secondary">
        Link Button
      </Button>
      <Button color="link" className="btn-link-danger">
        Link Button
      </Button>
      <Button color="link" className="btn-link-warning">
        Link Button
      </Button>
      <Button color="link" className="btn-link-info">
        Link Button
      </Button>
      <Button color="link" className="btn-link-success">
        Link Button
      </Button>
      <Button color="link" className="btn-link-dark">
        Link Button
      </Button>
      <Button color="link" className="btn-link-light">
        Link Button
      </Button>
    </>
  );
};

export default LinkBtn;
