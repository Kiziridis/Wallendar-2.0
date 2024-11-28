'use strict';

var utils = require('../utils/writer.js');
var FriendRequest = require('../service/FriendRequestService');

module.exports.acceptDeclineFriendRequest = function acceptDeclineFriendRequest (req, res, next, body, friendRequestId) {
  FriendRequest.acceptDeclineFriendRequest(body, friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelFriendRequest = function cancelFriendRequest (req, res, next, friendRequestId) {
  FriendRequest.cancelFriendRequest(friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveFriendRequest = function receiveFriendRequest (req, res, next, senderId, friendRequestId) {
  FriendRequest.receiveFriendRequest(senderId, friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendFriendRequest = function sendFriendRequest (req, res, next, body, receiverId) {
  FriendRequest.sendFriendRequest(body, receiverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
