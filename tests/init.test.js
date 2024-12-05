const http = require('http');
const request = require('supertest');
const app = require('../index'); // Ensure this path is correct
const test = require('ava');
const got = require('got');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    const server = t.context.server.listen(0);
    const { port } = server.address();
    t.context.got = got.extend({ prefixUrl: `http://localhost:${port}` });
    console.log('Server started');
});

test.after.always((t) => {
    t.context.server.close();
    console.log('Server closed');
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const http = require("http");
// const test = require("ava");
// const got = require("got");
// const app = require("../index");
// //const request = require('supertest');
// // const { getUsers } = require("../service/UserService.js");

// test.before(async t => {
//     console.log('Starting server... :)');
//     server = http.createServer(app);
//     await new Promise(resolve => {
//         server.listen(0, () => {
//             const { port } = server.address();
//             t.context.got = require('got').extend({ responseType: 'json', prefixUrl: `http://localhost:${port}` });
//             console.log(`Server started on port ${port}`);
//             resolve();
//         });
//     });
// });
// test.after.always((t) => {
// 	t.context.server.close();
// });

// test("A test that passes", (t) => {
// 	t.pass();
// });
// test("GET /docs returns correct response and status code", async (t) => {
// 	const response = await t.context.got('docs/');
// 	// t.is(body.message, "It works!");
// 	t.is(response.statusCode, 200, "Expected a 200 status code");
//     t.is(response.headers["content-type"], "text/html; charset=UTF-8", "Expected a text/html content type");
//     t.is(response.headers["swagger-api-docs-url"], "/api-docs", "Expected a /api-docs URL");
//     t.is(response.body.includes("Swagger UI"), true, "Expected the response body to include 'Swagger UI'");
// });
	

// //UNHAPPY PATH for get /users
// test("GET /users returns 404 for non-existent username", async (t) => {
//     const username = "nonexistent_user"; // Example invalid username

//     // try {
//     //     await t.context.got("users", {throwHttpErrors: false}, {responseType: "json"});
//     //     t.fail("Expected a 404 error for non-existent username");
//     // } catch (error) {
//     //     t.is(error.response.code, 404, "Expected a 404 status code");
//     // }
//     const response = await t.context.got("users/", {
// 		searchParams: {username},
// 		throwHttpErrors: false
//     });

//     t.is(response.statusCode, 404);
// });

// //HAPPY PATH for GET /users
// test('GET /users returns correct response for valid username', async (t) => {
// 	const username = "tmpillas";
//     const response = await t.context.got("users/", {
// 		searchParams: {username},
// 		throwHttpErrors: false
//     });
	
//     t.is(response.statusCode, 200);
// });

// HAPPT PATH for GET /wallet/{walletId}/cards when wallet has cards
test('GET /wallet/{walletId}/cards returns correct response when not empty', async(t) =>{
    walletId = 1;
    const response = await t.context.got(`wallet/${walletId}/cards`, { responseType: 'json' });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body,     
        [
         {
          card_holder: "Konstantinos Panagiotou",
          cardNumber: 1111222233334444,
          cvv: 107,
          exp_date: 22032032
        },
        {
          card_holder: "Konstantinos Panagiotou",
          cardNumber: 5555666677778888,
          cvv: 110,
          exp_date: 22062062
        }
      ]);
})
// HAPPY PATH for GET /wallet/{walletId}/cards when wallet is empty
test('GET /wallet/{walletId}/cards returns correct response when empty', async(t) =>{
    walletId = 6;
    const response = await t.context.got(`wallet/${walletId}/cards`, { responseType: 'json' });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body,[]);
})

// UNHAPPY PATH for GET /wallet/{walletId}/cards [walletId does not exist]
test('GET /wallet/{walletId}/cards returns correct when walletId does not exist', async(t) =>{
    walletId = 1111111212331;
    const response = await t.context.got(`wallet/${walletId}/cards`, {throwHttpErrors: false, responseType: 'json' });
    t.is(response.statusCode, 404);
})


// HAPPY PATH for POST /wallet/{walletId}/card 
test('POST /wallet/{walletId}/card creates a card', async (t) => {
    walletId = 1;
    const card = {
        "card_holder" : "Konstantinos Panagiotou",
        "cvv" : 999,
        "card_number" : 9999000099990000,
        "exp_date" : 12122034
    };
    const response = await t.context.got.post(`wallet/${walletId}/card`,
         {json: card,
            responseType: 'json',
            throwHttpErrors:false});
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, {});
});

// UNHAPPY PATH for POST /wallet/{walletId}/card [walletId does not exist]
test('POST /wallet/{walletId}/card does not create a card when walletId does not exist', async (t) => {
    walletId = 1111111111111111;
    const card = {
        "card_holder" : "Konstantinos Panagiotou",
        "cvv" : 999,
        "card_number" : 9999000099990000,
        "exp_date" : 12122034
    };
    const response = await t.context.got.post(`wallet/${walletId}/card`,
         {json: card,
            responseType: 'json',
            throwHttpErrors:false});
    t.is(response.statusCode, 400);
});
// UNHAPPY PATH for POST /wallet/{walletId}/card [card data are not in correct form]
test('POST /wallet/{walletId}/card does not create a card when card data are not in correct form', async (t) => {
    walletId = 2;
    const card = {
        "card_holder" : "Test",
        "cvv" : "a",
        "card_number" : 9999000099990000,
        "exp_date" : 12122034
    };
    const response = await t.context.got.post(`wallet/${walletId}/card`,
         {json: card,
            responseType: 'json',
            throwHttpErrors:false});
    t.is(response.statusCode, 400);
    
    const body = response.body;
    t.deepEqual(body, {
        message: 'request.body.cvv should be integer'
    });
});