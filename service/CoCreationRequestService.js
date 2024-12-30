'use strict';

var examples = {};
examples['application/json'] = {
"senderId" : 6,
"receiverId" : 1,
"suggestedtimeslot" : [ {
"date" : 5,
"time" : 5
}, {
"date" : 5,
"time" : 5
} ],
"coCreationId" : 0,
"is_pending" : true
};
/**
 * Respond (accept/decline) to a co-creation request, approve / disapprove the suggested time slot.
 * FR13: The user must be able to co-create events. (accept - decline co-creation request) FR14: The user must be able to approve/ disapprove the suggested timeslot. 
 *
 * body CoCreationRequest CoCreationRequest model (optional)
 * suggestedTimeslot Integer Suggested Timeslot (optional)
 * coCreationId Integer Id of the co-creation request
 * returns CoCreationRequest
 **/
exports.coCreation = function(body,suggestedTimeslot,coCreationId) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Receive a co-creation request.
 * FR13: The user must be able to co-create events. (receive co-creation request) 
 *
 * senderId Integer The userId of the sender of the co-creation request.
 * coCreationId Integer Id of the co-creation request
 * returns CoCreationRequest
 **/
exports.receiveCoCreationRequest = function(senderId,coCreationId) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a co-creation request.
 * FR13: The user must be able to co-create events. (send co-creation request) 
 *
 * body CoCreationRequest CoCreationRequest model (optional)
 * receiverIds List The userIds of the receivers of the co-creation request
 * returns CoCreationRequest
 **/
exports.sendCoCreationRequest = function(body,receiverIds) {
  return new Promise(function(resolve, reject) {

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

