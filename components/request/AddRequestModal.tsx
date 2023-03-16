import {
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
} from "@chakra-ui/react";
import AddRequestForm from "./AddRequestForm";

const AddRequestModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddRequestForm onCancel={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddRequestModal;