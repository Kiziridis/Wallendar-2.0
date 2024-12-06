'use strict';
const Events = [
  {
    date: 20231001,
    duration: 2,
    eventId: 1,
    documents: [
      { documentId: 1 },
      { documentId: 2 }
    ],
    time: 10,
    place: "Conference Room A",
    title: "Team Meeting",
    day: "Monday",
    participants: [
      { participantId: 1, name: "Alice" },
      { participantId: 2, name: "Bob" }
    ]
  },
  {
    date: 20231002,
    duration: 1,
    eventId: 2,
    documents: [
      { documentId: 3 }
    ],
    time: 14,
    place: "Office",
    title: "Project Update",
    day: "Tuesday",
    participants: [
      { participantId: 3, name: "Charlie" },
      { participantId: 4, name: "David" }
    ]
  },
  {
    date: 20231003,
    duration: 3,
    eventId: 3,
    documents: [
      { documentId: 4 },
      { documentId: 5 }
    ],
    time: 9,
    place: "Online",
    title: "Client Presentation",
    day: "Wednesday",
    participants: [
      { participantId: 5, name: "Eve" },
      { participantId: 6, name: "Frank" }
    ]
  }
];

const exampleCalendars = {
  1: [Events[0], Events[1]],
  2: [Events[2]]
};


// module.exports = { Events, exampleCalendars };
/**
 * Add an event to all attendants' calendars.
 * FR15: The system must be able to add the co-created event in the attendants' calendars. 
 *
 * body Event 
 * userIds List Ids of the users
 * calendarIds List Ids of the users calendars
 * returns Calendars
 **/
exports.addAllCalendars = function(body, userIds, calendarIds) {
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

    // Add the event to each specified calendar
    calendarIds.forEach(calendarId => {
      if (!exampleCalendars[calendarId]) {
        exampleCalendars[calendarId] = [];
      }
      exampleCalendars[calendarId].push(event);
    });

    // Resolve with the updated calendars
    resolve(exampleCalendars);
  });
};

/**
 * Add a new event in your calendar.
 * FR7: The user must be able to manage an event. (add event) 
 *
 * body Event 
 * calendarId Integer Id of the user's calendar
 * returns Event
 **/

exports.addEvent = function(body, calendarId) {
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
     // Check if the calendar exists
     if (!exampleCalendars[calendarId]) {
      reject({
        message: "Calendar does not exist",
        code: 400
      });
      return;
    }

    // Check if the event already exists in the calendar
    if (exampleCalendars[calendarId] && exampleCalendars[calendarId].find(e => e.eventId === body.eventId)) {
      reject({
        message: "Event already exists in the calendar",
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

    // Add the event to the calendar
    if (!exampleCalendars[calendarId]) {
      exampleCalendars[calendarId] = [];
    }
    exampleCalendars[calendarId].push(event);

    // Resolve with the created event
    resolve(event);
  });
};
/**
 * Delete an event from your calendar.
 * FR7: The user must be able to manage an event. (delete event) 
 *
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that needs to be deleted
 * returns Success
 **/

exports.deleteEvent = function(calendarId, eventId) {
  return new Promise(function(resolve, reject) {
    // Check if the calendar exists
    if (!exampleCalendars[calendarId]) {
      reject({
        message: "Calendar does not exist",
        code: 400
      });
      return;
    }

    // Find the event index in the calendar
    const eventIndex = exampleCalendars[calendarId].findIndex(e => e.eventId === eventId);
    if (eventIndex === -1) {
      reject({
        message: "Event not found in the calendar",
        code: 400
      });
      return;
    }

    // Remove the event from the calendar
    exampleCalendars[calendarId].splice(eventIndex, 1);

    // Resolve with a success message
    resolve({
      message: "Event deleted successfully",
      code: 200
    });
  });
}

/**
 * Find common free spots in the users' calendar
 * FR12: The system must be able to find the common free spots in the users' calendar. 
 *
 * userIds List Ids of the users
 * calendarIds List Ids of the users calendars
 * returns List
 **/
exports.findCommonFreeSpots = function(userIds,calendarIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "{}",
  "time" : "{}"
}, {
  "date" : "{}",
  "time" : "{}"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find free spots in the user's calendar
 * FR10: The system must be able to find the free spots in the user's calendar. 
 *
 * calendarId Integer Id of the user's calendar
 * returns List
 **/
exports.findFreeSpots = function(calendarId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "{}",
  "time" : "{}"
}, {
  "date" : "{}",
  "time" : "{}"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

