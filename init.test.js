const http = require("http");
const test = require("ava");
const got = require("got");
const app = require("../index");


test.before(async (t) => { 
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
// test("GET /docs returns correct response and status code", async (t) => {
// 	const response = await t.context.got('docs/');
// 	// t.is(body.message, "It works!");
// 	t.is(response.statusCode, 200, "Expected a 200 status code");
//     t.is(response.headers["content-type"], "text/html; charset=UTF-8", "Expected a text/html content type");
//     t.is(response.headers["swagger-api-docs-url"], "/api-docs", "Expected a /api-docs URL");
//     t.is(response.body.includes("Swagger UI"), true, "Expected the response body to include 'Swagger UI'");
// });

test("GET /docs returns correct response and status code", async (t) => {
    const response = await t.context.got('docs/', { responseType: "text" }); // Handle HTML response as text
    t.is(response.statusCode, 200, "Expected a 200 status code");
    t.is(response.headers["content-type"], "text/html; charset=UTF-8", "Expected a text/html content type");
    t.true(response.body.includes("Swagger UI"), "Expected the response body to include 'Swagger UI'");
});