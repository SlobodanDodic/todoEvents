import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import EventForm from "../Components/EventForm";

export default function EventNavBar(props) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h3">
            <EventForm />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
