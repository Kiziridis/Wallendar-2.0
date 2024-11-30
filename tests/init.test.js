const http = require('node:http');
const test = require('ava');
const got = require('got');

const app = require('../index');


test.before(async (t) => { // einai async giati tha trexei prin ta tests?? to async paei mazi me to await
	t.context.server = http.createServer(app);
    const server = t.context.server.listen();
    const { port } = server.address();
	t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
	t.context.server.close();
});
test("A test that passes", (t) => {
	t.pass();
});

test("A test that passes", (t) => {
	t.fail();
});
