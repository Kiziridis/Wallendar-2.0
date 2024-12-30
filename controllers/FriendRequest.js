'use strict';

var utils = require('../utils/writer.js');
var FriendRequest = require('../service/FriendRequestService');

module.exports.acceptDeclineFriendRequest = function acceptDeclineFriendRequest (_req, res, _next, body, friendRequestId) {
  FriendRequest.acceptDeclineFriendRequest(body, friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelFriendRequest = function cancelFriendRequest (_req, res, _next, friendRequestId) {
  FriendRequest.cancelFriendRequest(friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveFriendRequest = function receiveFriendRequest (_req, res, _next, senderId, friendRequestId) {
  FriendRequest.receiveFriendRequest(senderId, friendRequestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendFriendRequest = function sendFriendRequest (_req, res, _next, body, receiverId) {
  FriendRequest.sendFriendRequest(body, receiverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
