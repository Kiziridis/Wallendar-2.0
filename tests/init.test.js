const http = require('node:http');
const test = require('ava');
const got = require('got');
const express = require('express');
const app = require('../index');



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



/*
**********************************************************
Test for select card from wallet successfully and with the right card's infos
**********************************************************
*/


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


/*
**********************************************************
Test for select card from not existing wallet
**********************************************************
*/

test('GET wallet/{walletId}/card/{cardnumber} False walletId', async (t) => {
    walletId = 20;
    cardNumber = 2222333344445555;
    const {body, statusCode} = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { throwHttpErrors: false, responseType: 'json' });
    t.is(statusCode, 400);
    // t.deepEqual(response.body, {
    //     card_holder: 'John Doe',
    //     cvv: 108,
    //     cardNumber: 2222333344445555,
    //     exp_date: 22042042
    // });
});





/*
**********************************************************
Test for delete card suuccessfully
**********************************************************
*/

test('DELETE wallet/{walletId}/card/{cardnumber} Remove card from wallet successfully', async (t) => {
    walletId = 2;
    cardNumber = 2222333344445555;
    const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
    t.is(response.statusCode, 200);
});


/*
**********************************************************
Test for delete card when walletId is not found in database
**********************************************************
*/

test('DELETE wallet/{walletId}/card/{cardnumber} Card not found walletId does not exist', async (t) => {
    walletId = 20;
    cardNumber = 2222333344445555;
    const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, {throwHttpErrors: false},{ responseType: 'json' });
    t.is(response.statusCode, 400);
    
});


/*
**********************************************************
Test for creating a vaid notification
**********************************************************
*/

test('POST notification Create a notification', async (t) => {
    const notification = {
        notificationTime: 6,
        notificationId: 1    };
    const response = await t.context.got.post('notification',
        { json: notification, 
            responseType: 'json' ,
            throwHttpErrors: false});
    t.is(response.statusCode, 200);
});



// test('POST notification Create a notification', async (t) => {
//     const notification = {
//         notificationTime: 5454545,
//         notificationId: 1    };
//     const response = await t.context.got.post('notification',
//         { json: notification, 
//             responseType: 'json' ,
//             throwHttpErrors: false});
//     t.is(response.statusCode, 200);
// });
