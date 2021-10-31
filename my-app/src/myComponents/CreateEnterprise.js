import { useState } from "react";
import "./CreateEnterprise.css";
import NewModal from "./NewModal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";
import { useHistory } from "react-router-dom";

function CreateEnterprise() {
  const [show, setShow] = useState(false);
  const [enteredName, setEnteredName] = useState({});
  const [enterpriseList, setEnterpriseList] = useState([
    { name: "Enterprise", id: "g1" },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const handleRoute = () => {
    history.push("/configure");
  };

  const deleteItemHandler = (enId) => {
    setEnterpriseList((prevItems) => {
      const updatedList = prevItems.filter((item) => item.id !== enId);
      return updatedList;
    });
  };

  return (
    <>
      <NewModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        enName={setEnteredName}
        enList={setEnterpriseList}
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
              <Grid item xs={6} sm={4} md={3} lg={3}>
                <MediaCard
                  name={i.name}
                  key={i.id}
                  id={i.id}
                  onDeleteItem={deleteItemHandler}
                  onClick={handleRoute}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default CreateEnterprise;
