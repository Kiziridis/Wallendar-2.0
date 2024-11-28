const http = require('node:http');
const test = require('ava');
const got = require('got');

const app = require('../index');

test("A test that passes", (t) => {
	t.pass();
});
test.before(async (t) => { // einai async giati tha trexei prin ta tests?? to async paei mazi me to await
	t.context.server = http.createServer(app);
    const server = t.context.server.listen();
    const { port } = server.address();
	t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
	t.context.server.close();
});
test("GET /document", async (t) => {
	const { body, statusCode } = await t.context.got("document/0", {
		throwHttpErrors: false // Prevent `got` from rejecting the promise on 400 responses
	});
	t.is(statusCode, 400);
});
