import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import React from "react";

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={this.handleDateClick}
      events={[
        { title: "event 1", date: "2023-01-10" },
        { title: "event 2", date: "2023-01-20" },
      ]}
    />
  );
};

export default Calendar;
