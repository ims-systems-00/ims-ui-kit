import Card from "../Cards/CardBase";
import CardBody from "../Cards/CardBodyBase";
import CardFooter from "../Cards/CardFooterBase";
import CardHeader from "../Cards/CardHeaderBase";

const ActivityBase = ({
  avatar,
  name,

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
            <p className="m-0 font-size-body-2 text-type-dark">{name}</p>
            {subHeading && (
              <h6 className="mb-1  font-size-caption text-type-medium">
                {subHeading}
              </h6>
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody className="bg-transparent border-0 shadow-none p-0 ">
        {activity}
      </CardBody>
      <CardFooter className="bg-transparent border-0 shadow-none pt-2">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default ActivityBase;
