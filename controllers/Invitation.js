'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Invitation service module
var Invitation = require('../service/InvitationService');


module.exports.acceptDeclineEventInvitation = function acceptDeclineEventInvitation (_req, res, _, body, invitationId) {
// Function to handle accepting or declining an event invitation
  
  // Call the acceptDeclineEventInvitation function from the Invitation service
  Invitation.acceptDeclineEventInvitation(body, invitationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};


module.exports.cancelInvite = function cancelInvite (__, res, _, calendarId, eventId, invitationId) {
// Function to handle canceling an invitation

  // Call the cancelInvite function from the Invitation service
  Invitation.cancelInvite(calendarId, eventId, invitationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};


module.exports.inviteEvent = function inviteEvent (__, res, _, body, inviteeId, calendarId, eventId) {
// Function to handle inviting someone to an event

  // Call the inviteEvent function from the Invitation service
  Invitation.inviteEvent(body, inviteeId, calendarId, eventId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

module.exports.receiveEventInvite = function receiveEventInvite (__, res, _, inviterId, calendarId, eventId, invitationId) {
// Function to handle receiving an event invitation

  // Call the receiveEventInvite function from the Invitation service
  Invitation.receiveEventInvite(inviterId, calendarId, eventId, invitationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};