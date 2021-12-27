import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import { dbfs } from "../../firebase";

import { getFirestore, collection, getDocs } from "firebase/firestore";

function AllPolicy() {
  const [allPolicy, setAllPolicy] = useState([]);

  const get_policies = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), "policies"));
    setAllPolicy(querySnapshot.docs);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    get_policies();
  }, []);

  return (
    <>
      <Box className="main">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "100px" }}
        >
          {allPolicy.map((item, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
              <Card sx={{ maxWidth: 250 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item?.data().policyName}
                  </Typography>

                  <Typography variant="body2">
                    {item?.data().applications[0].packageName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Show policy</Button>
                  <Button size="small">Delete policy</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default AllPolicy;
