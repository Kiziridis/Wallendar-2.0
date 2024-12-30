'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the Card service module
var Card = require('../service/CardService');

// Function to handle selecting a card
module.exports.selectCard = function selectCard (req, res, next, walletId, cardNumber) {
  // Call the selectCard function from the Card service
  Card.selectCard(walletId, cardNumber)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};