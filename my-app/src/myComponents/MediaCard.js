import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./MediaCard.css";
import { useHistory } from "react-router-dom";

function MediaCard(props) {
  const history = useHistory();

  const cardHandler = () => {
    history.push("/configure");
  };

  const onEditHandler = () => {
    props.onUpdate();
    props.onEditItem(props.id);
  };

  const onDeleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Card className="mcard" sx={{ maxWidth: 150, maxHeight: 150 }}>
      <CardMedia
        className="card-media"
        component="img"
        height="80"
        image="./cloud.jpg"
        alt="enterprise"
        style={{
          cursor: "pointer",
          borderRadius: "3% 3% 0 0",
          opacity: "0.8",
        }}
        onClick={cardHandler}
      />
      <CardContent
        className="py-0 mt-1"
        style={{ cursor: "pointer" }}
        onClick={cardHandler}
      >
        <Typography
          className="enterprise-heading"
          gutterBottom
          variant="h6"
          component="div"
          fontSize={15}
          color="#9a6ec4"
        >
          {props.name}
        </Typography>
      </CardContent>
      <CardActions className="py-0">
        <Button onClick={onEditHandler} style={{ fontSize: "12px" }}>
          Edit
        </Button>
        <Button onClick={onDeleteHandler} style={{ fontSize: "12px" }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
