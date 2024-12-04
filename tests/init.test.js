const http = require('node:http');
const test = require('ava');
const got = require('got');
const express = require('express');
const app = require('../index');

const selectCard = require('../service/CardService').selectCard;

test.before(async (t) => {
    t.context.server = http.createServer(app);
    const server = t.context.server.listen(0);
    const { port } = server.address();
    t.context.got = got.extend({ prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
    t.context.server.close();
});




test('GET wallet/{walletId}/card/{cardnumber} Select card from wallet successfully', async (t) => {
    walletId = 2;
    cardNumber = 2222333344445555;
    const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, {
        card_holder: 'John Doe',
        cvv: 108,
        cardNumber: 2222333344445555,
        exp_date: 22042042
    });
});





// test('GET wallet/{walletId}/card/{cardnumber} not matchind id with owner', async (t) => {
//     walletId = 2;
//     cardNumber = 2222333344445555;
//     const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
//     t.is(response.statusCode, 400);
//     t.deepEqual(response.body, {
//         card_holder: 'John Doe',
//         cvv: 108,
//         cardNumber: 2222333344445555,
//         exp_date: 22042042
//     });
// });