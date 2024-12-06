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

// HAPPY PATH for GET /wallet/{walletId}/cards when wallet has cards
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
});


// HAPPY PATH for GET document/{documentId}
test('GET document/{documentId}', async (t) => {
    const documentId = 1 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 200);
});

// UNHAPPY PATH for GET document/{documentId} [documentId does not exist]
test('GET document/{documentId} Nonexistent document', async (t) => {
    const documentId = 7 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});

// UNHAPPY PATH for GET document/{documentId} [documentId is negative]
test('GET document/{documentId} Document with a negative id', async (t) => {
    const documentId = -7 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});

// UNHAPPY PATH for GET document/{documentId} [documentId is not in correct form]
test('GET document/{documentId} Document with invalid id', async (t) => {
    const documentId = 'a' ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});

// HAPPY PATH for DELETE document/{documentId}
test('DELETE document', async (t) => {
    const documentId = 1 ;
    const response = await t.context.got.delete(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 200);
}); 

// UNHAPPY PATH for DELETE document/{documentId} [documentId does not exist]
test('DELETE document nonexisting document', async (t) => {
    const documentId = 9 ;
    const response = await t.context.got.delete(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});