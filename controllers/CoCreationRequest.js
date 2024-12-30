'use strict';

var utils = require('../utils/writer.js');
var CoCreationRequest = require('../service/CoCreationRequestService');

module.exports.coCreation = function coCreation (_req, res, _next, body, suggestedTimeslot, coCreationId) {
  CoCreationRequest.coCreation(body, suggestedTimeslot, coCreationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveCoCreationRequest = function receiveCoCreationRequest (_req, res, _next, senderId, coCreationId) {
  CoCreationRequest.receiveCoCreationRequest(senderId, coCreationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendCoCreationRequest = function sendCoCreationRequest (_req, res, _next, body, receiverIds) {
  CoCreationRequest.sendCoCreationRequest(body, receiverIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
