'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Calendar service module
var Calendar = require('../service/CalendarService');

// Function to handle adding all calendars
module.exports.addAllCalendars = function addAllCalendars (req, res, next, body, userIds, calendarIds) {
  // Call the addAllCalendars function from the Calendar service
  Calendar.addAllCalendars(body, userIds, calendarIds)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};

// Function to handle adding an event
module.exports.addEvent = function addEvent (req, res, next, body, calendarId) {
  // Call the addEvent function from the Calendar service
  Calendar.addEvent(body, calendarId)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};

// Function to handle deleting an event
module.exports.deleteEvent = function deleteEvent ( res, calendarId, eventId) {
  // Call the deleteEvent function from the Calendar service
  Calendar.deleteEvent(calendarId, eventId)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};

// Function to handle finding common free spots
module.exports.findCommonFreeSpots = function findCommonFreeSpots ( res, userIds, calendarIds) {
  // Call the findCommonFreeSpots function from the Calendar service
  Calendar.findCommonFreeSpots(userIds, calendarIds)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};