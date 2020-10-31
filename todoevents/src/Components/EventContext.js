import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const EventContext = createContext();

const EventProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("eList")) || [];

  const [events, setEvents] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("eList", JSON.stringify(events));
  }, [events]);

  const addEvent = (duty) => {
    setEvents([...events, { duty, id: uuidv4() }]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const findEvent = (id) => {
    const item = events.find((event) => event.id === id);

    setEditItem(item);
  };

  const editEvent = (duty, id) => {
    const newEvents = events.map((event) =>
      event.id === id ? { duty, id } : event
    );
    setEvents(newEvents);
    setEditItem(null);
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, deleteEvent, findEvent, editEvent, editItem }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
