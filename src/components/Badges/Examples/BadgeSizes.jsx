import React from "react";
import BadgeBase from "../BadgeBase";

const BadgeSizes = ({}) => {
  return (
    <>
      <h1>
        Hello World <BadgeBase>Default</BadgeBase>
      </h1>
      <br /> <br />
      <h2>
        Hello World <BadgeBase color="primary">Primary</BadgeBase>
      </h2>
      <br /> <br />
      <h3>
        Hello World <BadgeBase color="info">Info</BadgeBase>
      </h3>
      <br /> <br />
      <h4>
        Hello World <BadgeBase color="pending">Pending</BadgeBase>
      </h4>
      <br /> <br />
      <h5>
        Hello World <BadgeBase color="success">Success</BadgeBase>
      </h5>
      <br /> <br />
      <h6>
        Hello World <BadgeBase color="danger">Danger</BadgeBase>
      </h6>
      <br /> <br />
      <p>
        Hello World <BadgeBase color="warning">Warning</BadgeBase>
      </p>
      <br /> <br />
      <small>
        Hello World <BadgeBase color="dark">Dark</BadgeBase>
      </small>
    </>
  );
};

export default BadgeSizes;
