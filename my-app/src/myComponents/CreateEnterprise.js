import { useState } from "react";
import "./CreateEnterprise.css";
import NewModal from "./NewModal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";

function CreateEnterprise() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [enterpriseList, setEnterpriseList] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [editId, setEditId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

  function editTask(id, newName) {
    const editedTaskList = enterpriseList.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setEnterpriseList(editedTaskList);
    setEnteredValue("");
    editHandleClose();
  }

  const deleteItemHandler = (enId) => {
    setEnterpriseList((prevItems) => {
      const updatedList = prevItems.filter((item) => item.id !== enId);
      return updatedList;
    });
  };

  const addItemhandler = () => {
    if (enteredValue.length !== 0) {
      setEnterpriseList((item) => [
        ...item,
        { name: enteredValue, id: Math.random().toString() },
      ]);
      setEnteredValue("");
      handleClose();
    }
  };

  return (
    <>
      <NewModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        value={enteredValue}
        onSave={setEnteredValue}
        onAdd={addItemhandler}
        head="Add Enterprise"
      />
      <NewModal
        show={editShow}
        handleClose={editHandleClose}
        handleShow={editHandleShow}
        value={enteredValue}
        onSave={setEnteredValue}
        onUpdate={() => editTask(editId, enteredValue)}
        head="Edit Enterprise"
      />
      <Box className="main">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "2%" }}
        >
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Card
              className="create-box"
              sx={{ p: 2, border: " 2px dashed #96959557" }}
              display="flex"
              justifycontent="center"
              alignitems="center"
              onClick={handleShow}
            >
              <div style={{ marginTop: "20%" }}>
                <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                <p className="mt-2">Add Enterprise</p>
              </div>
            </Card>
          </Grid>
          {enterpriseList.length > 0 &&
            enterpriseList.map((i) => (
              <Grid key={i.id} item xs={6} sm={4} md={3} lg={3}>
                <MediaCard
                  name={i.name}
                  key={i.id}
                  id={i.id}
                  onDeleteItem={deleteItemHandler}
                  onEditItem={setEditId}
                  onUpdate={() => editHandleShow()}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default CreateEnterprise;
