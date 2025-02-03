'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the CoCreationRequest service module
var CoCreationRequest = require('../service/CoCreationRequestService');


module.exports.coCreation = function coCreation (__, res, _, body, suggestedTimeslot, coCreationId) {
// Function to handle co-creation

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


module.exports.receiveCoCreationRequest = function receiveCoCreationRequest (__, res, _, senderId, coCreationId) {
// Function to handle receiving a co-creation request

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


module.exports.sendCoCreationRequest = function sendCoCreationRequest (__, res, _, body, receiverIds) {
// Function to handle sending a co-creation request

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