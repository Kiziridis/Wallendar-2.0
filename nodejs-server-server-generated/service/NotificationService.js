'use strict';


/**
 * Create a notification.
 * FR6: The system must be able to notify the user about their upocoming events (create notification). 
 *
 * body Notification 
 * returns Success
 **/
exports.notification = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Receive a notification.
 * FR6: The system must be able to notify the user about their upocoming events (receive notification). 
 *
 * notificationId Integer Id of the notification
 * returns Notification
 **/
exports.notify = function(notificationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationTime" : 6,
  "notificationId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

