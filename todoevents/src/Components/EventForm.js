import React, { useContext, useState, useEffect } from "react";
import { EventContext } from "./EventContext";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2.25),
  },
}));

export default function EventForm() {
  const classes = useStyles();
  const { addEvent, editEvent, editItem } = useContext(EventContext);

  const [duty, setDuty] = useState("");

  const handleChange = (e) => {
    setDuty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addEvent(duty);
      setDuty("");
    } else {
      editEvent(duty, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setDuty(editItem.duty);
    } else {
      setDuty("");
    }
  }, [editItem]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined"
        label="Enter the event"
        color="secondary"
        required
        onChange={handleChange}
        value={duty}
      />
      <Button
        type="submit"
        variant="contained"
        color={editItem ? "secondary" : "primary"}
        size="small"
        className={classes.button}
        startIcon={editItem ? <EditIcon /> : <SaveIcon />}
      >
        {editItem ? "Edit" : "Add"}
      </Button>
    </form>
  );
}
