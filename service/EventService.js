'use strict';


/**
 * Create an event.
 * FR11: The user must be able to create an event 
 *
 * body Event Event model (optional)
 * returns Event
 **/
exports.createEvent = function(body) {
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
 * Edit an event in your calendar.
 * FR7: The user must be able to manage an event. (edit event) 
 *
 * body Event Event model (optional)
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that needs to be edited
 * returns Event
 **/
exports.editEvent = function(body,calendarId,eventId) {
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

