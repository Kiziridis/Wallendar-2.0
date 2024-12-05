const exampleEvents = [
  {
    date: "2023-10-01",
    duration: 2,
    eventId: 1,
    documents: [
      { documentId: 1 },
      { documentId: 2 }
    ],
    time: "10:00",
    place: "Conference Room A",
    title: "Team Meeting",
    day: "Monday",
    participants: [
      { participantId: 1, name: "Alice" },
      { participantId: 2, name: "Bob" }
    ]
  },
  {
    date: "2023-10-02",
    duration: 1,
    eventId: 2,
    documents: [
      { documentId: 3 }
    ],
    time: "14:00",
    place: "Office",
    title: "Project Update",
    day: "Tuesday",
    participants: [
      { participantId: 3, name: "Charlie" },
      { participantId: 4, name: "David" }
    ]
  },
  {
    date: "2023-10-03",
    duration: 3,
    eventId: 3,
    documents: [
      { documentId: 4 },
      { documentId: 5 }
    ],
    time: "09:00",
    place: "Online",
    title: "Client Presentation",
    day: "Wednesday",
    participants: [
      { participantId: 5, name: "Eve" },
      { participantId: 6, name: "Frank" }
    ]
  }
];


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

    // Find the event by eventId
    const eventIndex = exampleEvents.findIndex(e => e.eventId === eventId);
    if (eventIndex === -1) {
      reject({
        message: "Event not found",
        code: 404
      });
      return;
    }

    // Update the event with the new data
    const updatedEvent = {
      ...exampleEvents[eventIndex],
      date: body.date,
      duration: body.duration,
      documents: body.documents || exampleEvents[eventIndex].documents,
      time: body.time,
      place: body.place,
      title: body.title,
      day: body.day,
      participants: body.participants
    };

    // Replace the old event with the updated event
    exampleEvents[eventIndex] = updatedEvent;

    // Resolve with the updated event
    resolve(updatedEvent);
  });
};