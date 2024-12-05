'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.searchUsers = function searchUsers (req, res, next, username) {
  User.searchUsers(username)
    .then(function (response) {
      utils.writeJson(res, response,response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};
