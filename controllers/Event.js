'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.createEvent = function createEvent (_req, res, _next, body) {
  Event.createEvent(body)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.editEvent = function editEvent (_req, res, _next, body, calendarId, eventId) {
  Event.editEvent(body, calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};
