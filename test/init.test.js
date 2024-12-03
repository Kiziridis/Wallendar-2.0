const http = require('http');
const request = require('supertest');
const app = require('../index'); // Ensure this path is correct
const test = require('ava');

let server;

test.before(async t => {
    console.log('Starting server... :)');
    server = http.createServer(app);
    await new Promise(resolve => {
        server.listen(0, () => {
            const { port } = server.address();
            t.context.got = require('got').extend({ responseType: 'json', prefixUrl: `http://localhost:${port}` });
            console.log(`Server started on port ${port}`);
            resolve();
        });
    });
});

test.after.always(t => {
    console.log('Closing server...');
    server.close(() => {
        console.log('Server closed');
    });
});

test('GET /users', async t => {
    const response = await t.context.got.get('users', { searchParams: { username: 'kizi' } });
    t.is(response.statusCode, 200);
    const users = response.body;
    const userExists = users.some(user => user.username === 'kizi');
    t.true(userExists, 'User kizi not found');
});