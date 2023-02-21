import Card from "components/Cards/CardBase";
import CardBody from "components/Cards/CardBodyBase";
import CardFooter from "components/Cards/CardFooterBase";
import CardHeader from "components/Cards/CardHeaderBase";

const ActivityBase = ({
  avatar,
  name,

  subHeading,
  activity,
  footer,
  ...rest
}) => {
  return (
    <Card className="bg-transparent border-0 shadow-none comment ms-5 mb-0">
      <CardHeader className="bg-transparent border-0 shadow-none">
        <div className="d-flex">
          <div className="avatar-container">
            <img src={avatar} alt="avatar" className="avatar mt-1 ms-3" />
          </div>
          <div>
            <p className="m-0">{name}</p>
            {subHeading && <small className="mb-1">{subHeading}</small>}
          </div>
        </div>
      </CardHeader>
      <CardBody className="bg-transparent border-0 shadow-none pt-2 ">
        {activity}
      </CardBody>
      <CardFooter className="bg-transparent border-0 shadow-none pt-0">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default ActivityBase;
