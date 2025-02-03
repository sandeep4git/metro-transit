import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>METRO TRANSIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
