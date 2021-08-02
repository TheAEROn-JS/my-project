import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: 90,
  },
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Meal Plan"
            image="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Meal Plan"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Don't have any meal plan yet!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Get Started with your new meal plan
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Create a Meal plan
          </Button>
          <Button size="small" color="primary">
            Leave it later
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
