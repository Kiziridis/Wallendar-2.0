'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Event service module
var Event = require('../service/EventService');


module.exports.createEvent = function createEvent (__, res, _, body) {
// Function to handle creating an event

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


module.exports.editEvent = function editEvent (__, res, _, body, calendarId, eventId) {
// Function to handle editing an event

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