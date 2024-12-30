'use strict';

var utils = require('../utils/writer.js');
var Calendar = require('../service/CalendarService');

module.exports.addAllCalendars = function addAllCalendars (_req, res, next, body, userIds, calendarIds) {
  Calendar.addAllCalendars(body, userIds, calendarIds)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.addEvent = function addEvent (_req, res, _next, body, calendarId) {
  Calendar.addEvent(body, calendarId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.deleteEvent = function deleteEvent (_req, res, _next, calendarId, eventId) {
  Calendar.deleteEvent(calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.findCommonFreeSpots = function findCommonFreeSpots (_req, res, _next, userIds, calendarIds) {
  Calendar.findCommonFreeSpots(userIds, calendarIds)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.findFreeSpots = function findFreeSpots (_req, res, _next, calendarId) {
  Calendar.findFreeSpots(calendarId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};
