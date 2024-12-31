'use strict';

// dummy user data
const users = [
  {
    userId: 1,
    user: {
      password: 'password',
      email_address: 'john@example.com',
      preferred_language: 'Greek',
      username: 'john-doe'
    }
  },
    {
      userId: 2,
      user: {
        password: 'password',
        email_address: 'jane@example.com',
        preferred_language: 'Greek',
        username: 'jane-doe'
      }
    },
  {
    userId: 3,
    user: {
      password: 'password',
      email_address: 'klpanagi@example.com',
      preferred_language: 'Greek',
      username: 'klpanagi'
    }
  }
];

/**
 * Search for other users.
 * FR5: The user must be able to search for other users by username. 
 *
 * username String username provided for the search
 * returns Users
 **/
exports.searchUsers = function(username) {
  return new Promise(function(resolve, reject) {
    const user = users.find(u => u.user.username === username );
    if (user) {
      resolve(user.user);
    } else {
      reject({
        message: "User not found",
        code: 404
      });
    }
  });
}