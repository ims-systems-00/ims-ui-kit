import ImsInputText from "../../ImsFormElements/ImsInputText";

const TextInputSizes = ({}) => {
  return (
    <>
      <ImsInputText
        label="Size Variants Large"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
        size="lg"
      />
      <ImsInputText
        label="Size Variants Regular"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
      />
      <ImsInputText
        label="Size Variants Small"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
        size="sm"
      />
    </>
  );
};

export default TextInputSizes;
