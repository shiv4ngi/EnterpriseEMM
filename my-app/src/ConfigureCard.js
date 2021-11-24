import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./myComponents/Configure.css";
import { useHistory } from "react-router-dom";

function ConfigureCard(props) {
  const history = useHistory();

  const cardHandler = () => {
    history.push("/policy");
  };

  return (
    <Card
      className="conCard"
      sx={{ maxWidth: 180, minWidth: 180 }}
      onClick={cardHandler}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image={props.img}
          alt="policies&devices"
        />
        <CardContent>
          <Typography
            gutterBottom
            className="configure-heading"
            variant="h6"
            component="div"
            fontSize={20}
          >
            {props.heading}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ConfigureCard;
