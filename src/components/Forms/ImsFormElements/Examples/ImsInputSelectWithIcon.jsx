// import options from "components/Forms/ImsSelectInput/Examples/options";
import ImsInputSelectWithIcon from "../ImsInputSelectWithIcon";

const ImsInputSelectWithIconDemo = ({}) => {
  return (
    <>
      <ImsInputSelectWithIcon
        label="Label Text"
        icon="fa-solid fa-home"
        onChange={(e) => console.log(e)}
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        defaultOpt="Select Option"
      />
    </>
  );
};

export default ImsInputSelectWithIconDemo;
