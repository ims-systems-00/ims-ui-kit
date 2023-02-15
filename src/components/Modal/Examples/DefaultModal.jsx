import React from "react";
import Modal from "../ModalBase";
import ModalHeader from "../ModalHeaderBase";
import ModalBody from "../ModalBodyBase";
import ModalFooter from "../ModalFooterBase";
import Button from "../../Buttons/ButtonBase";

const DefaultModal = ({ children, ...rest }) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Launch demo modal
      </Button>

      <Modal isOpen={modal} toggle={toggle} {...rest}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DefaultModal;
