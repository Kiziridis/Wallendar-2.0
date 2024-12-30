'use strict';

/**
 * Accept or decline an event invitation.
 * FR9: The user must be able to manage their event invitations. (accept or decline event invitations) 
 *
 * body Invitation Invitation model (optional)
 * invitationId Integer The Id of the invitation.
 * returns Invitation
 **/
exports.acceptDeclineEventInvitation = function(body,invitationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventId" : 5,
  "inviterId" : 6,
  "inviteeId" : 1,
  "invitationId" : 0,
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
 * Cancel an event invitation.
 * FR9: The user must be able to manage their event invitations. (cancel event invitations) 
 *
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event
 * invitationId Integer Id of the event invitation
 * returns Success
 **/
exports.cancelInvite = function(calendarId,eventId,invitationId) {
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
 * Invite a user to an event.
 * FR9: The user must be able to manage their event invitations. (invite other user to an event) 
 *
 * body Invitation Invitation model (optional)
 * inviteeId Integer The userId of the user that is invited
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event
 * returns Invitation
 **/
exports.inviteEvent = function(body,inviteeId,calendarId,eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventId" : 5,
  "inviterId" : 6,
  "inviteeId" : 1,
  "invitationId" : 0,
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
 * Receive an event invitation.
 * FR9: The user must be able to manage their event invitations. (receive invites from other users) 
 *
 * inviterId Integer The userId of the user that invites
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event
 * invitationId Integer Id of the event invitation
 * returns Invitation
 **/
exports.receiveEventInvite = function(inviterId,calendarId,eventId,invitationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventId" : 5,
  "inviterId" : 6,
  "inviteeId" : 1,
  "invitationId" : 0,
  "is_pending" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

