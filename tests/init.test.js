const http = require('node:http');
const test = require('ava');
const got = require('got');

const app = require('../index');

test("A test that passes", (t) => {
	t.pass();
});

test("A test that fails", (t) => {
	t.fail();
});

