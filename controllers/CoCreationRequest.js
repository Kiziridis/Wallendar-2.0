'use strict';

var utils = require('../utils/writer.js');
var CoCreationRequest = require('../service/CoCreationRequestService');

module.exports.coCreation = function coCreation (req, res, next, body, suggestedTimeslot, coCreationId) {
  CoCreationRequest.coCreation(body, suggestedTimeslot, coCreationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveCoCreationRequest = function receiveCoCreationRequest (req, res, next, senderId, coCreationId) {
  CoCreationRequest.receiveCoCreationRequest(senderId, coCreationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendCoCreationRequest = function sendCoCreationRequest (req, res, next, body, receiverIds) {
  CoCreationRequest.sendCoCreationRequest(body, receiverIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
