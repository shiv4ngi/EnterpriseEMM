import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./CreateEnterprise.css";

function NewModal(props) {
  const [mEnteredValue, setMEnteredValue] = useState("");

  const handleChangeName = (e) => {
    // console.log("key pressed", e.target.value);
    setMEnteredValue(e.target.value);
  };

  const saveEnterprise = (event) => {
    event.preventDefault();
    props.onSave(mEnteredValue);
    setMEnteredValue("");
  };

  return (
    <>
      <Modal className="modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Enterprise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter Name"
            value={mEnteredValue}
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
          <Button
            className="action-btn"
            variant="dark"
            onClick={saveEnterprise}
            disabled={mEnteredValue.length > 0 ? "" : "disabled"}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewModal;
