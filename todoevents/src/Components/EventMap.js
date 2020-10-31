import React, { useContext } from "react";
import { EventContext } from "./EventContext";
import Event from "./Event";

const EventMap = () => {
  const { events } = useContext(EventContext);
  return (
    <div>
      {events.length ? (
        <div>
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
      ) : (
        <div id="empy-events">No Events</div>
      )}
    </div>
  );
};

export default EventMap;
