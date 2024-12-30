'use strict';

// Importing required modules
var utils = require('../utils/writer.js');
var FriendRequest = require('../service/FriendRequestService');

// Function to accept or decline a friend request
module.exports.acceptDeclineFriendRequest = function acceptDeclineFriendRequest (_req, res, _next, body, friendRequestId) {
  FriendRequest.acceptDeclineFriendRequest(body, friendRequestId)
    .then(function (response) {
      // Sending success response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Sending error response
      utils.writeJson(res, response);
    });
};

// Function to cancel a friend request
module.exports.cancelFriendRequest = function cancelFriendRequest (_req, res, _next, friendRequestId) {
  FriendRequest.cancelFriendRequest(friendRequestId)
    .then(function (response) {
      // Sending success response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Sending error response
      utils.writeJson(res, response);
    });
};

// Function to receive a friend request
module.exports.receiveFriendRequest = function receiveFriendRequest (_req, res, _next, senderId, friendRequestId) {
  FriendRequest.receiveFriendRequest(senderId, friendRequestId)
    .then(function (response) {
      // Sending success response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Sending error response
      utils.writeJson(res, response);
    });
};

// Function to send a friend request
module.exports.sendFriendRequest = function sendFriendRequest (_req, res, _next, body, receiverId) {
  FriendRequest.sendFriendRequest(body, receiverId)
    .then(function (response) {
      // Sending success response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Sending error response
      utils.writeJson(res, response);
    });
};