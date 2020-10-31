import React, { useContext } from "react";
import { EventContext } from "./EventContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "7px",
    marginTop: "14px",
    margin: "auto",
    maxWidth: 500,
  },
  info: {
    padding: theme.spacing(0.15),
    margin: "2px",
    backgroundColor: "white",
  },
  icons: {
    paddingLeft: "4px",
    borderLeft: "1px solid lightgrey",
  },
}));

const Event = ({ event }) => {
  const classes = useStyles();
  const { deleteEvent, findEvent } = useContext(EventContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item container>
            <Grid item xs>
              <Typography variant="subtitle2">
                {event.duty.charAt(0).toUpperCase() + event.duty.slice(1)}
              </Typography>
            </Grid>

            <Grid className={classes.icons} item>
              <EditIcon
                onClick={() => findEvent(event.id)}
                id="edit"
                fontSize="small"
                color="primary"
              />
              <DeleteSharpIcon
                onClick={() => deleteEvent(event.id)}
                id="delete"
                fontSize="small"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Event;
