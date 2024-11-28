const http from "node:http";

const test from "ava";
const got from "got";
const listen from "test-listen";

const app from "../index.js";

test.before(async (t) => {
	t.context.server = http.createServer(app);
	t.context.prefixUrl = await listen(t.context.server);
	t.context.got = got.extend({ http2: true, throwHttpErrors: false, responseType: "json", prefixUrl: t.context.prefixUrl });
});

test.after.always((t) => {
	t.context.server.close();
});

test("GET / returns correct response and status code", async (t) => {
	const { body, statusCode } = await t.context.got("api");
	t.is(body.message, "It works!");
	t.is(statusCode, 200);
});
