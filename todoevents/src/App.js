import React from "react";
import EventNavBar from "./Components/EventNavBar";
import EventInfo from "./Components/EventInfo";
import EventMap from "./Components/EventMap";
import EventProvider from "./Components/EventContext";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  return (
    <EventProvider>
      <EventNavBar />
      <Toolbar />

      <Container>
        <EventInfo />
      </Container>

      <Container>
        <Box>
          <EventMap />
        </Box>
      </Container>
    </EventProvider>
  );
}

export default App;
