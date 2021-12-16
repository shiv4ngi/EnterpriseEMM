import { Button, Modal } from "react-bootstrap";

function SubmitForm(props) {
  return (
    <>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Policy Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Policy for the Enterprise is being submitted.
          {/* {props.policy} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitForm;
