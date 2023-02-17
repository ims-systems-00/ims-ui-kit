import options from "components/Forms/ImsSelectInput/Examples/options";
import ImsInputSelectBase from "../ImsInputSelect";
import ImsInputSelectWithIcon from "../ImsInputSelectWithIcon";

const ImsInputSelect = ({}) => {
  return (
    <>
      <h2>Without Icon</h2>
      <ImsInputSelectBase
        label="Label Text"
        onChange={(e) => console.log(e)}
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        defaultOpt="Select Option"
      />
      <br /> <br />
      <h2>With Icon</h2>
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

export default ImsInputSelect;
