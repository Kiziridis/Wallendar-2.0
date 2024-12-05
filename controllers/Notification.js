'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.notification = function notification (req, res, next, body) {
  Notification.notification(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notify = function notify (req, res, next, notificationId) {
  Notification.notify(notificationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
