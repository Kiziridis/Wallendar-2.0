const http = require('node:http');
const test = require('ava');
const got = require('got');
const app = require('../index'); // Ensure this points to your app

test.before(async (t) => {
    // Create and start the server on a random available port
    t.context.server = http.createServer(app);

    // Use a dynamic port (pass 0 to make the OS choose an available port)
    await new Promise((resolve) => {
        t.context.server.listen(0, () => {
            const { port } = t.context.server.address();
            t.context.got = got.extend({ responseType: 'json', prefixUrl: `http://localhost:${port}/` });
            resolve();
        });
    });
});

test.after.always((t) => {
    // Close the server after all tests have finished
    t.context.server.close();
});

test("GET /users/search/:username should return a user when the username exists", async (t) => {
    const username = 'kizi'; // search term
    const response = await t.context.got(`users/search/${username}`);

    // Check if the status code is 200
    t.is(response.statusCode, 200, "Expected a 200 status code");

    // Check if the response body is an array
    t.true(Array.isArray(response.body), "Expected response to be an array");

    // Check if the body contains a user with the search term in their username
    t.true(response.body.some(user => user.username.includes(username)), "Expected the response to contain the user");
});    