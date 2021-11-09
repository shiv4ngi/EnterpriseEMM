import { Button, Modal } from "react-bootstrap";
import "./CreateEnterprise.css";

function NewModal(props) {
  const handleChangeName = (e) => {
    props.onSave(e.target.value);
  };

  const addEnterprise = (event) => {
    event.preventDefault();
    props.onAdd();
  };

  const editEnterprise = (event) => {
    event.preventDefault();
    props.onUpdate();
  };

  return (
    <>
      <Modal className="modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.head}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter Name"
            value={props.value}
            onChange={handleChangeName}
            style={{ width: "-webkit-fill-available" }}
            maxLength="10"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="action-btn"
            variant="dark"
            onClick={props.handleClose}
          >
            Close
          </Button>
          {props.head === "Add Enterprise" ? (
            <Button
              className="action-btn"
              variant="dark"
              onClick={addEnterprise}
              disabled={props.value?.length > 0 ? "" : "disabled"}
            >
              Add
            </Button>
          ) : (
            <Button
              className="action-btn"
              variant="dark"
              onClick={editEnterprise}
              disabled={props.value?.length > 0 ? "" : "disabled"}
            >
              Update
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewModal;
