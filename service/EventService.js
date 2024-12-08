const exampleEvents = [
  {
    date: 20231001, // Number
    duration: 2, // Number
    eventId: 1, // Number
    documents: [
      { documentId: 1 }, // Number
      { documentId: 2 } // Number
    ],
    time: 1000, // Number
    place: "Conference Room A", // String
    title: "Team Meeting", // String
    day: "Monday", // String
    participants: [
      { 
        password: "password1", // String
        email_address: "alice@example.com", // String
        userId: 1, // Number
        preferred_language: "English", // String
        username: "alice" // String
      },
      { 
        password: "password2", // String
        email_address: "bob@example.com", // String
        userId: 2, // Number
        preferred_language: "English", // String
        username: "bob" // String
      }
    ]
  },
  {
    date: 20231002, // Number
    duration: 1, // Number
    eventId: 2, // Number
    documents: [
      { documentId: 3 } // Number
    ],
    time: 1400, // Number
    place: "Office", // String
    title: "Project Update", // String
    day: "Tuesday", // String
    participants: [
      { 
        password: "password3", // String
        email_address: "charlie@example.com", // String
        userId: 3, // Number
        preferred_language: "English", // String
        username: "charlie" // String
      },
      { 
        password: "password4", // String
        email_address: "david@example.com", // String
        userId: 4, // Number
        preferred_language: "English", // String
        username: "david" // String
      }
    ]
  },
  {
    date: 20231003, // Number
    duration: 3, // Number
    eventId: 3, // Number
    documents: [
      { documentId: 4 }, // Number
      { documentId: 5 } // Number
    ],
    time: 900, // Number
    place: "Online", // String
    title: "Client Presentation", // String
    day: "Wednesday", // String
    participants: [
      { 
        password: "password5", // String
        email_address: "eve@example.com", // String
        userId: 5, // Number
        preferred_language: "English", // String
        username: "eve" // String
      },
      { 
        password: "password6", // String
        email_address: "frank@example.com", // String
        userId: 6, // Number
        preferred_language: "English", // String
        username: "frank" // String
      }
    ]
  }
];

const exampleCalendars = {
  1: [exampleEvents[0], exampleEvents[1]],
  2: [exampleEvents[2]]
};





exports.createEvent = function(body) {
  return new Promise(function(resolve, reject) {
    // Validate the input body
    if (!body || typeof body.date !== 'number' || body.date < 0 || 
        typeof body.duration !== 'number' || body.duration < 0 || 
        typeof body.eventId !== 'number' || body.eventId < 0 || 
        typeof body.time !== 'number' || body.time < 0 || 
        typeof body.place !== 'string' || 
        typeof body.title !== 'string' || 
        typeof body.day !== 'string' || 
        !Array.isArray(body.participants)) {
      reject({
        message: "Invalid event data types or negative values",
        code: 400
      });
      return;
    }

    
    // Check if the event already exists
    if (exampleEvents.find(e => e.eventId === body.eventId)) {
      reject({
        message: "Event already exists",
        code: 400
      });
      return;
    }

    // Create the event
    const event = {
      date: body.date,
      duration: body.duration,
      eventId: body.eventId,
      documents: body.documents || [],
      time: body.time,
      place: body.place,
      title: body.title,
      day: body.day,
      participants: body.participants
    };

    // Add the event to the example events array
    exampleEvents.push(event);

    // Resolve with the created event
    resolve(event);
  });
};

/**
 * Edit an event in your calendar.
 * FR7: The user must be able to manage an event. (edit event) 
 *
 * body Event Event model (optional)
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that needs to be edited
 * returns Event
 **/
exports.editEvent = function(body, calendarId, eventId) {
  return new Promise(function(resolve, reject) {
    // Validate the input body
    if (!body || !body.date || !body.duration || !body.time || !body.place || !body.title || !body.day || !body.participants) {
      reject({
        message: "Invalid event data",
        code: 400
      });
      return;
    }

    // Check if the calendar exists
    const calendar = exampleCalendars[calendarId];
    if (!calendar) {
      reject({
        message: "Calendar not found",
        code: 404
      });
      return;
    }
    // Find the event by eventId
    const eventIndex = calendar.findIndex(event => event.eventId === eventId);
    if (eventIndex === -1) {
      reject({
        message: "Event not found",
        code: 404
      });
      return;
    }

    // Update the event
    calendar[eventIndex] = { ...calendar[eventIndex], ...body };
    resolve({
      message: "Event updated successfully",
      event: calendar[eventIndex]
    });
  });
}

