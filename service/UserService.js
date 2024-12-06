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
    examples['application/json'] = [
      {
        password: 'password',
        email_address: 'john@example.com',
        userId: 1,
        preferred_language: 'Greek',
        username: 'john-doe'
      },
      {
        password: 'password',
        email_address: 'kizi@example.com',
        userId: 2,
        preferred_language: 'Greek',
        username: 'kizi'
      },
      {
        password: 'password',
        email_address: 't@example.com',
        userId: 4,
        preferred_language: 'Greek',
        username: 'tmpillas'
      }
    ];
    const filteredUsers = examples['application/json'].filter((user) =>
      user.username.includes(username)
    );
    if (filteredUsers.length > 0) {
      resolve(filteredUsers);
    } else {
      reject({
        code: 404,
        message: 'No users found matching the username.',
      });
    }
  });
};