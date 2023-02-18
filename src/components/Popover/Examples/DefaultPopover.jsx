import ListGroup from "components/List/ListGroupBase";
import { useState } from "react";
import CloseBtn from "components/Buttons/CloseButtonBase";
import Button from "../../Buttons/ButtonBase";
import ListGroupItem from "../../List/ListGroupItemBase";
import Popover from "../PopoverBase";
import PopoverBody from "../PopoverBodyBase";
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
        placement="bottom"
      >
        <PopoverHeader>
          Popover Title
          <CloseBtn className="pull-right" onClick={toggle} />
        </PopoverHeader>
        <PopoverBody>
          <ListGroup>
            <ListGroupItem action>Cras justo odio</ListGroupItem>
            <ListGroupItem action>
              Dapibus ac facilisis in morbi leo risus
            </ListGroupItem>
            <ListGroupItem action active>
              Morbi leo risus dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem action>
              Porta ac consectetur ac vestibulum at eros
            </ListGroupItem>
          </ListGroup>
        </PopoverBody>
        <div className="p-2">
          {" "}
          <i className="fa-solid fa-house"></i>
          <Button className="pull-right" size="sm">
            Move Here
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default DefaultPopover;
