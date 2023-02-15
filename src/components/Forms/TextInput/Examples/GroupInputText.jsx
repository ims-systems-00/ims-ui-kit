import Input from "../InputBase";
import InputGroup from "../InputGroupBase";
import InputGroupText from "../InputGroupTextBase";

const GroupInputText = ({}) => {
  return (
    <>
      <h4>Left Icon </h4>
      <InputGroup>
        <InputGroupText>
          <i className="fa-solid fa-house"></i>
        </InputGroupText>

        <Input />
      </InputGroup>
      <br /> <br />
      <h4>No Icon</h4>
      <InputGroup>
        <Input />
      </InputGroup>
      <br /> <br />
      <h4>Right Icon </h4>
      <InputGroup>
        <Input />
        <InputGroupText>
          <i className="fa-solid fa-house"></i>
        </InputGroupText>
      </InputGroup>
      <br /> <br />
      <h4>Left and Right Icon </h4>
      <InputGroup>
        <InputGroupText>
          <i className="fa-solid fa-house"></i>
        </InputGroupText>
        <Input />
        <InputGroupText>
          <i className="fa-solid fa-house"></i>
        </InputGroupText>
      </InputGroup>
      <br /> <br />
      <h4>Left and Right Checkbox/Radio</h4>
      <InputGroup>
        <InputGroupText>
          <input type="checkbox" />
        </InputGroupText>
        <Input />
        <InputGroupText>
          <input type="checkbox" />
        </InputGroupText>
      </InputGroup>
      <br /> <br />
      <InputGroup>
        <InputGroupText>
          <input type="radio" />
        </InputGroupText>
        <Input />
        <InputGroupText>
          <input type="radio" />
        </InputGroupText>
      </InputGroup>
      <br /> <br />
    </>
  );
};

export default GroupInputText;
