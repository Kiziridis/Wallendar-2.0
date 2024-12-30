'use strict';

// Import the utils module for writing JSON responses
var utils = require('../utils/writer.js');

// Import the User service module
var User = require('../service/UserService');

// Function to handle searching for users by username
module.exports.searchUsers = function searchUsers (req, res, next, username) {
  // Call the searchUsers function from the User service
  User.searchUsers(username)
    .then(function (response) {
      // If the promise resolves, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      // If the promise rejects, write the JSON response with the response code
      utils.writeJson(res, response, response.code);
    });
};