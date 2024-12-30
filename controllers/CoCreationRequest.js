'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the CoCreationRequest service module
var CoCreationRequest = require('../service/CoCreationRequestService');

// Function to handle co-creation
module.exports.coCreation = function coCreation (req, res, next, body, suggestedTimeslot, coCreationId) {
  // Call the coCreation function from the CoCreationRequest service
  CoCreationRequest.coCreation(body, suggestedTimeslot, coCreationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

// Function to handle receiving a co-creation request
module.exports.receiveCoCreationRequest = function receiveCoCreationRequest (req, res, next, senderId, coCreationId) {
  // Call the receiveCoCreationRequest function from the CoCreationRequest service
  CoCreationRequest.receiveCoCreationRequest(senderId, coCreationId)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};

// Function to handle sending a co-creation request
module.exports.sendCoCreationRequest = function sendCoCreationRequest (req, res, next, body, receiverIds) {
  // Call the sendCoCreationRequest function from the CoCreationRequest service
  CoCreationRequest.sendCoCreationRequest(body, receiverIds)
    .then(function (response) {
      // If the promise resolves, write the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response
      utils.writeJson(res, response);
    });
};