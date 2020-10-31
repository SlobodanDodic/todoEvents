import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

import { EventContext } from "./EventContext";

export default function EventInfo() {
  const { events } = useContext(EventContext);
  const dateToday = Date.now();
  let audio = new Audio("/sound.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <Container className="info-container">
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={4}>
          <Avatar id="sum">Σ</Avatar>
        </Grid>
        <Grid id="today-grid" item xs={4}>
          <Typography align="center" variant="subtitle2" onClick={start}>
            <Moment format="dddd, DD MMM YYYY">{dateToday}</Moment>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar id="total-events">{events.length}</Avatar>
        </Grid>
      </Grid>
    </Container>
  );
}
