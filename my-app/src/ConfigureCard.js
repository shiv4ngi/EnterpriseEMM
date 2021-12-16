import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import "./myComponents/Configure.css";

function ConfigureCard(props) {
  return (
    <Card className="conCard" sx={{ maxWidth: 270, minWidth: 180 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="180"
        image={props.img}
        alt="policies&devices"
      />
      <CardContent>
        <Typography
          gutterBottom
          className="configure-heading py-0"
          variant="h6"
          component="div"
          fontSize={20}
        >
          {props.heading}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions className="actionBtn mb-2">
        <Button onClick={props.onAdd} style={{ fontSize: "12px" }}>
          Create New
        </Button>
        <Button onClick={props.onShow} style={{ fontSize: "12px" }}>
          Show Existing
        </Button>
      </CardActions>
    </Card>
  );
}

export default ConfigureCard;
