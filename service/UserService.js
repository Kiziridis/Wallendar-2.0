'use strict';

let dummyUsers = [
  {
    userId: 1,
    username: 'john-doe',
    email_address: 'john@example.com',
    password: 'password',
    preferred_language: 'Greek',
  },
  {
    userId: 2,
    username: 'kizi',
    email_address: 'kizi@example.com',
    password: 'password',
    preferred_language: 'Greek',
  },
];

exports.searchUsers = function (username) {
  return new Promise(function (resolve, reject) {
    const filteredUsers = dummyUsers.filter((user) =>
      user.username.includes(username)
    );
    if (filteredUsers.length > 0) {
      resolve(filteredUsers);
    } else {
      reject({
        status: 404,
        message: 'No users found matching the username.',
      });
    }
  });
};
