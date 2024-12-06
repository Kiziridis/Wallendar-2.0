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
    const { notificationTime, notificationId } = body;
    if (!Number.isInteger(notificationTime) || !Number.isInteger(notificationId) || notificationTime <= 0 || notificationTime >= 24 || notificationId <= 0) {
      reject({
        message: 'Invalid notification parameters',
        code: 400
      });
    } else {
      resolve({
        message: 'Notification created',
        code: 200
      });
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
    if (Number.isInteger(notificationId) && notificationId > 0 && notifications[notificationId]) {
      resolve(notifications[notificationId]);
    } else {
      reject({
        message: 'Notification not found',
        code: 400
      });
    }
  });
}

const notifications = {
  1: {
    notificationTime: 6,
    notificationId: 1
  },
  2: {
    notificationTime: 10,
    notificationId: 2
  }
}