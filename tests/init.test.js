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
Testing endpoint GET /wallet/{walletId}/card/{cardnumber} [happy path]
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
Testing endpoint GET /wallet/{walletId}/card/{cardnumber} [unhappy path(walletId does not exist)]
**********************************************************
*/

test('GET wallet/{walletId}/card/{cardnumber} Invalid walletId', async (t) => {
    walletId = 20;
    cardNumber = 2222333344445555;
    const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { throwHttpErrors: false, responseType: 'json' });
    t.is(response.statusCode, 400);
});





/*
**********************************************************
Test for delete card suuccessfully
Testing endpoint DELETE /wallet/{walletId}/card/{cardnumber} [happy path]
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
Testing endpoint DELETE /wallet/{walletId}/card/{cardnumber} [unhappy path(walletId does not exist)]
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
Testing endpoint POST /notification [happy path]
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




/*
**********************************************************
Test for creating a vaid notification
Testing endpoint POST /notification [unhappy path(notificationTime is not a between 0 and 24)]
**********************************************************
*/


test('POST notification Create a notification with invalid time', async (t) => {
    const notification = {
        notificationTime: -10, // Invalid time
        notificationId: 1
    };
    const response = await t.context.got.post('notification', {
        json: notification,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
});


/*
**********************************************************
Test for creating a vaid notification
Testing endpoint POST /notification [unhappy path(notificationId is not a positive number)]
**********************************************************
*/


test('POST notification Create a notification with invalid Id', async (t) => {
    const notification = {
        notificationTime: 10,
        notificationId: -1    // Invalid Id
    };
    const response = await t.context.got.post('notification', {
        json: notification,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
})


/*
**********************************************************
Test for creating a vaid notification
Testing endpoint GET /notification/{notificationId} [happy path]
**********************************************************
*/


test('GET notification/{notificationId} Receive a notification', async (t) => {
    const notificationId = 2; 
    const response = await t.context.got(`notification/${notificationId}`, {
        throwHttpErrors: false,
        responseType: 'json'
    });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, {
        notificationTime: 10,
        notificationId: 2
    });
});


/*
**********************************************************
Test for creating a vaid notification
Testing endpoint GET /notification/{notificationId} [unhappy path(notificationId is not a positive number)]
**********************************************************
*/


test('GET /notification/{notificationId} Receive a notification with invalid Id', async (t) => {
    const notificationId = -1; // Invalid Id
    const response = await t.context.got(`notification/${notificationId}`, {
        throwHttpErrors: false,
        responseType: 'json'
    });
    t.is(response.statusCode, 400);
});
