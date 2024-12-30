'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Event service module
var Event = require('../service/EventService');

// Function to handle creating an event
module.exports.createEvent = function createEvent (req, res, next, body) {
  // Call the createEvent function from the Event service
  Event.createEvent(body)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};

// Function to handle editing an event
module.exports.editEvent = function editEvent (req, res, next, body, calendarId, eventId) {
  // Call the editEvent function from the Event service
  Event.editEvent(body, calendarId, eventId)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};