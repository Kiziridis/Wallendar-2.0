'use strict';


/**
 * Search for other users.
 * FR5: The user must be able to search for other users by username. 
 *
 * username String username provided for the search
 * returns Users
 **/
exports.searchUsers = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "email_address" : "email_address",
  "userId" : 0,
  "preferred_language" : "Greek",
  "username" : "username"
}, {
  "password" : "password",
  "email_address" : "email_address",
  "userId" : 0,
  "preferred_language" : "Greek",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

