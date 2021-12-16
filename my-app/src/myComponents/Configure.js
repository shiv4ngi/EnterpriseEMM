import * as React from "react";
import "./Configure.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ConfigureCard from "../ConfigureCard";
import po from "../assets/policies.png";
import dev from "../assets/dev.jpg";
import { useHistory } from "react-router-dom";

function Configure() {
  const history = useHistory();

  const addPolicy = () => {
    history.push("/policy");
  };

  const showPolicy = () => {
    history.push("/all-policy");
  };

  const addDevice = () => {
    history.push("/device");
  };

  const showDevice = () => {
    history.push("/all-device");
  };
  return (
    <>
      <Box className="main" sx={{ width: "100%" }}>
        <Grid
          className="center"
          container
          spacing={5}
          columns={16}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <ConfigureCard
              img={po}
              heading="Policies"
              onAdd={addPolicy}
              onShow={showPolicy}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ConfigureCard
              img={dev}
              heading="Devices"
              onAdd={addDevice}
              onShow={showDevice}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Configure;
