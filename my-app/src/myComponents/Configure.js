import * as React from "react";
import "./Configure.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ConfigureCard from "../ConfigureCard";
import po from "../assets/policies.png";
import dev from "../assets/dev.jpg";

function Configure() {
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
          <Grid item xs={12} sm={6} className="policyCard">
            <ConfigureCard img={po} heading="Policies" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ConfigureCard img={dev} heading="Devices" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Configure;
