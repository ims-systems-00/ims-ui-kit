import React from "react";
import Card from "../Cards/CardBase";
import CardBody from "../Cards/CardBodyBase";
import CardFooter from "../Cards/CardFooterBase";
import CardHeader from "../Cards/CardHeaderBase";

const SingleReply = ({
  name,
  avatar,
  subHeading,
  activity,
  footer,
  ...rest
}) => {
  return (
    <Card className="bg-transparent border-0 shadow-none activity ms-5 ml-5 mb-0">
      <CardHeader className="bg-transparent border-0 shadow-none ">
        <div className="d-flex">
          <div className="avatar-container">
            <img src={avatar} alt="avatar" className="avatar mt-1 ms-3 ml-3" />
          </div>
          <div>
            <p className="m-0">{name}</p>
            {subHeading && (
              <small className="mb-1 text-muted">{subHeading}</small>
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody className="bg-transparent border-0 shadow-none ps-3 py-0">
        {activity}
      </CardBody>
      <CardFooter className="bg-transparent border-0 shadow-none pt-2">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default SingleReply;
