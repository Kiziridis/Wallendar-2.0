'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Invitation service module
var Invitation = require('../service/InvitationService');

// Function to handle accepting or declining an event invitation
module.exports.acceptDeclineEventInvitation = function acceptDeclineEventInvitation (req, res, next, body, invitationId) {
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

// Function to handle canceling an invitation
module.exports.cancelInvite = function cancelInvite (req, res, next, calendarId, eventId, invitationId) {
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

// Function to handle inviting someone to an event
module.exports.inviteEvent = function inviteEvent (req, res, next, body, inviteeId, calendarId, eventId) {
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

// Function to handle receiving an event invitation
module.exports.receiveEventInvite = function receiveEventInvite (req, res, next, inviterId, calendarId, eventId, invitationId) {
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