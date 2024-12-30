'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the FriendRequest service module
var FriendRequest = require('../service/FriendRequestService');

// Function to handle accepting or declining a friend request
module.exports.acceptDeclineFriendRequest = function acceptDeclineFriendRequest (req, res, next, body, friendRequestId) {
  // Call the acceptDeclineFriendRequest function from the FriendRequest service
  FriendRequest.acceptDeclineFriendRequest(body, friendRequestId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

// Function to handle canceling a friend request
module.exports.cancelFriendRequest = function cancelFriendRequest (req, res, next, friendRequestId) {
  // Call the cancelFriendRequest function from the FriendRequest service
  FriendRequest.cancelFriendRequest(friendRequestId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

// Function to handle receiving a friend request
module.exports.receiveFriendRequest = function receiveFriendRequest (req, res, next, senderId, friendRequestId) {
  // Call the receiveFriendRequest function from the FriendRequest service
  FriendRequest.receiveFriendRequest(senderId, friendRequestId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

// Function to handle sending a friend request
module.exports.sendFriendRequest = function sendFriendRequest (req, res, next, body, receiverId) {
  // Call the sendFriendRequest function from the FriendRequest service
  FriendRequest.sendFriendRequest(body, receiverId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};