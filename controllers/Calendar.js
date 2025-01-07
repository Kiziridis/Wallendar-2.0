'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Calendar service module
var Calendar = require('../service/CalendarService');


module.exports.addAllCalendars = function addAllCalendars (req, res, _, body, userIds, calendarIds) {
// Function to handle adding all calendars

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


module.exports.addEvent = function addEvent (req, res, _, body, calendarId) {
// Function to handle adding an event

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


module.exports.deleteEvent = function deleteEvent (req, res, _, calendarId, eventId) {
// Function to handle deleting an event

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


module.exports.findCommonFreeSpots = function findCommonFreeSpots (req, res, _, userIds, calendarIds) {
// Function to handle finding common free spots

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

module.exports.findFreeSpots = function findFreeSpots (req, res, _, calendarId) {
  Calendar.findFreeSpots(calendarId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};
