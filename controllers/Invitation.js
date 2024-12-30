'use strict';

var utils = require('../utils/writer.js');
var Invitation = require('../service/InvitationService');

module.exports.acceptDeclineEventInvitation = function acceptDeclineEventInvitation (_req, res, _next, body, invitationId) {
  Invitation.acceptDeclineEventInvitation(body, invitationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelInvite = function cancelInvite (_req, res, _next, calendarId, eventId, invitationId) {
  Invitation.cancelInvite(calendarId, eventId, invitationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inviteEvent = function inviteEvent (_req, res, _next, body, inviteeId, calendarId, eventId) {
  Invitation.inviteEvent(body, inviteeId, calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveEventInvite = function receiveEventInvite (_req, res, _next, inviterId, calendarId, eventId, invitationId) {
  Invitation.receiveEventInvite(inviterId, calendarId, eventId, invitationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
