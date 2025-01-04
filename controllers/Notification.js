'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

/**
 * Sends a notification based on the provided body.
 * 
 * This function sends a notification by calling the `notification` method from the `Notification` service.
 * It handles the response and errors appropriately.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {object} body - The body of the notification to be sent.
 */
module.exports.notification = function notification(_req, res, _, body) {
  Notification.notification(body)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Sends a specific notification based on the notification ID.
 * 
 * This function sends a specific notification by calling the `notify` method from the `Notification` service.
 * It handles the response and errors appropriately.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} notificationId - The ID of the notification to be sent.
 */
module.exports.notify = function notify(_req, res, _, notificationId) {
  Notification.notify(notificationId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};
