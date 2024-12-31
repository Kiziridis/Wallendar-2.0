'use strict';

/**
 * Accept or decline a friend request.
 * FR1: The user must be able to manage friend requests. (accept or decline friend request) 
 *
 * body FriendRequest Friend request model
 * friendRequestId Integer The Id of the friend request.
 * returns FriendRequest
 **/
exports.acceptDeclineFriendRequest = function(body,friendRequestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senderId" : 0,
  "receiverId" : 6,
  "friendRequestId" : 1,
  "is_pending" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a friend request.
 * FR1: The user must be able to manage friend requests. (cancel friend request) 
 *
 * friendRequestId Integer The Id of the friend request.
 * returns Success
 **/
exports.cancelFriendRequest = function(friendRequestId) {
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
 * Receive a friend request.
 * FR1: The user must be able to manage friend requests. (receive friend request) 
 *
 * senderId Integer The userId of the sender of the friend request.
 * friendRequestId Integer The Id of the friend request.
 * returns FriendRequest
 **/
exports.receiveFriendRequest = function(senderId,friendRequestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senderId" : 0,
  "receiverId" : 6,
  "friendRequestId" : 1,
  "is_pending" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a friend request.
 * FR1: The user must be able to manage friend requests. (send friend request) 
 *
 * body FriendRequest Friend request model
 * receiverId Integer The userId of the receiver of the friend request.
 * returns FriendRequest
 **/
exports.sendFriendRequest = function(body,receiverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senderId" : 0,
  "receiverId" : 6,
  "friendRequestId" : 1,
  "is_pending" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

