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

// test("GET /wallet/{walletId}/card/{cardNumber} returns correct response and status code", async (t) => {
//     const walletId = 1; // Example walletId
//     const cardNumber = 1111222233334444; // Example cardNumber

//     const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, {
//         method: "GET",
//         responseType: "json"
//     });

//     // Asserting status code
//     t.is(response.statusCode, 200, "Expected a 200 status code");

//     // Asserting content type
//     t.is(response.headers["content-type"], "application/json; charset=utf-8", "Expected a JSON content type");

//     // Asserting response body structure
//     t.like(response.body, {
//         card_holder: "Konstantinos Panagiotou",
//         card_number: 1111222233334444
//     }, "Expected the correct partial card details in the response body");

//     // Asserting the complete response body if required
//     t.deepEqual(response.body, {
//         card_holder: "Konstantinos Panagiotou",
//         cvv: 107,
//         card_number: 1111222233334444,
//         exp_date: 22032932
//     }, "Expected the exact card details in the response body");
// });
