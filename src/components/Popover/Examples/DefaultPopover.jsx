import ListGroup from "components/List/ListGroupBase";
import { useState } from "react";
import CloseBtn from "components/Buttons/Examples/CloseBtn";
import Button from "../../Buttons/ButtonBase";
import ListGroupItem from "../../List/ListGroupItemBase";
import Popover from "../PopoverBase";
import PopoverBody from "../PopoverBodyBase";
import PopoverFooter from "../PopoverFooterBase";
import PopoverHeader from "../PopoverHeaderBase";

const DefaultPopover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover
        className="folder-navigation"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>
          Popover Title
          <CloseBtn />
        </PopoverHeader>
        <PopoverBody>
          <ListGroup>
            <ListGroupItem action active href="#" tag="a">
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem action href="#" tag="a">
              Dapibus ac facilisis in morbi leo risus
            </ListGroupItem>
            <ListGroupItem action href="#" tag="a">
              Morbi leo risus dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem action href="#" tag="a">
              Porta ac consectetur ac vestibulum at eros
            </ListGroupItem>
            <ListGroupItem action disabled href="#" tag="a">
              Vestibulum at eros porta ac consectetur ac
            </ListGroupItem>
          </ListGroup>
        </PopoverBody>
        <PopoverFooter className="popover-footer">
          <i className="fa-solid fa-house"></i>
          <Button size="sm">Move Here</Button>
        </PopoverFooter>
      </Popover>
    </div>
  );
};

export default DefaultPopover;
