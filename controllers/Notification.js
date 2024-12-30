'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Notification service module
var Notification = require('../service/NotificationService');

// Function to handle creating a notification
module.exports.notification = function notification (req, res, next, body) {
  // Call the notification function from the Notification service
  Notification.notification(body)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};

// Function to handle sending a notification
module.exports.notify = function notify (req, res, next, notificationId) {
  // Call the notify function from the Notification service
  Notification.notify(notificationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the