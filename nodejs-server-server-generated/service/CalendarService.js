'use strict';


/**
 * Add an event to all attendants' calendars.
 * FR15: The system must be able to add the co-created event in the attendants' calendars. 
 *
 * body Event 
 * userIds List Ids of the users
 * calendarIds List Ids of the users calendars
 * returns Calendars
 **/
exports.addAllCalendars = function(body,userIds,calendarIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : 5,
  "calendarId" : 0,
  "month" : 6,
  "year" : 1,
  "time" : 5,
  "Day" : "Monday",
  "events" : [ {
    "date" : 6,
    "duration" : 5,
    "eventId" : 0,
    "documents" : [ {
      "documentId" : 0
    }, {
      "documentId" : 0
    } ],
    "time" : 1,
    "place" : "place",
    "title" : "title",
    "day" : "Monday",
    "participants" : [ {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    }, {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    } ]
  }, {
    "date" : 6,
    "duration" : 5,
    "eventId" : 0,
    "documents" : [ {
      "documentId" : 0
    }, {
      "documentId" : 0
    } ],
    "time" : 1,
    "place" : "place",
    "title" : "title",
    "day" : "Monday",
    "participants" : [ {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    }, {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    } ]
  } ]
}, {
  "date" : 5,
  "calendarId" : 0,
  "month" : 6,
  "year" : 1,
  "time" : 5,
  "Day" : "Monday",
  "events" : [ {
    "date" : 6,
    "duration" : 5,
    "eventId" : 0,
    "documents" : [ {
      "documentId" : 0
    }, {
      "documentId" : 0
    } ],
    "time" : 1,
    "place" : "place",
    "title" : "title",
    "day" : "Monday",
    "participants" : [ {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    }, {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    } ]
  }, {
    "date" : 6,
    "duration" : 5,
    "eventId" : 0,
    "documents" : [ {
      "documentId" : 0
    }, {
      "documentId" : 0
    } ],
    "time" : 1,
    "place" : "place",
    "title" : "title",
    "day" : "Monday",
    "participants" : [ {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    }, {
      "password" : "password",
      "email_address" : "email_address",
      "userId" : 0,
      "preferred_language" : "Greek",
      "username" : "username"
    } ]
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new event in your calendar.
 * FR7: The user must be able to manage an event. (add event) 
 *
 * body Event 
 * calendarId Integer Id of the user's calendar
 * returns Event
 **/
exports.addEvent = function(body,calendarId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : 6,
  "duration" : 5,
  "eventId" : 0,
  "documents" : [ {
    "documentId" : 0
  }, {
    "documentId" : 0
  } ],
  "time" : 1,
  "place" : "place",
  "title" : "title",
  "day" : "Monday",
  "participants" : [ {
    "password" : "password",
    "email_address" : "email_address",
    "userId" : 0,
    "preferred_language" : "Greek",
    "username" : "username"
  }, {
    "password" : "password",
    "email_address" : "email_address",
    "userId" : 0,
    "preferred_language" : "Greek",
    "username" : "username"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an event from your calendar.
 * FR7: The user must be able to manage an event. (delete event) 
 *
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that needs to be deleted
 * returns Success
 **/
exports.deleteEvent = function(calendarId,eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

