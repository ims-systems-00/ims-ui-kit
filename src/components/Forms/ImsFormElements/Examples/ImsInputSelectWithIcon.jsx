import options from "components/Forms/ImsSelectInput/Examples/options";
import ImsInputSelectWithIcon from "../ImsInputSelectWithIcon";

const ImsInputSelectWithIconDemo = ({}) => {
  return (
    <>
      <ImsInputSelectWithIcon
        label="Label Text"
        icon="fa-solid fa-home"
        onChange={(e) => console.log(e)}
        options={options}
        defaultOpt="Select Option"
      />
    </>
  );
};

export default ImsInputSelectWithIconDemo;
