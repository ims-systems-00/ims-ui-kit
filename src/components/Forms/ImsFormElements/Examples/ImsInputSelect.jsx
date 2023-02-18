import ImsInputSelectBase from "../ImsInputSelect";

const ImsInputSelect = ({}) => {
  return (
    <>
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
    </>
  );
};

export default ImsInputSelect;
