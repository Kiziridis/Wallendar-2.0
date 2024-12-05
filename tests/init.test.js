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


// test('GET wallet/{walletId}/card/{cardnumber} Select card from wallet successfully', async (t) => {
//     walletId = 2;
//     cardNumber = 2222333344445555;
//     const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
//     t.is(response.statusCode, 200);
//     t.deepEqual(response.body, {
//         card_holder: 'John Doe',
//         cvv: 108,
//         cardNumber: 2222333344445555,
//         exp_date: 22042042
//     });
// });


/*
**********************************************************
Test for select card from not existing wallet
**********************************************************
*/

// test('GET wallet/{walletId}/card/{cardnumber} False walletId', async (t) => {
//     walletId = 2;
//     cardNumber = 2222333344445555;
//     const {response} = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { throwHttpErrors: false, responseType: 'json' });
//     t.is(response.statusCode, 400);
// });





/*
**********************************************************
Test for delete card suuccessfully
**********************************************************
*/

// test('DELETE wallet/{walletId}/card/{cardnumber} Remove card from wallet successfully', async (t) => {
//     walletId = 20;
//     cardNumber = 2222333344445555;
//     const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
//     t.is(response.statusCode, 200);
// });


/*
**********************************************************
Test for delete card when walletId is not found in database
**********************************************************
*/

// test('DELETE wallet/{walletId}/card/{cardnumber} Card not found walletId does not exist', async (t) => {
//     walletId = 20;
//     cardNumber = 2222333344445555;
//     const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, {throwHttpErrors: false},{ responseType: 'json' });
//     t.is(response.statusCode, 400);
    
// });


/*
**********************************************************
Test for creating a vaid notification
**********************************************************
*/

// test('POST notification Create a notification', async (t) => {
//     const notification = {
//         notificationTime: 6,
//         notificationId: 1    };
//     const response = await t.context.got.post('notification',
//         { json: notification, 
//             responseType: 'json' ,
//             throwHttpErrors: false});
//     t.is(response.statusCode, 200);
// });



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

/*
**********************************************************
Test viewing a document
**********************************************************
*/

test('GET document/${documentId}', async (t) => {
    const documentId = 1 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 200);
});

/*
**********************************************************
Test for viewing a document that does not exist
**********************************************************
*/
test('GET document/${documentId} Nonexistent document', async (t) => {
    const documentId = 7 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});

/*
**********************************************************
Test for viewing a document with a negative id
**********************************************************
*/

test('GET document/${documentId} Document with a negative id', async (t) => {
    const documentId = -7 ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});


/*
**********************************************************
Test for deleting a document
**********************************************************
*/
// test('DELETE document', async (t) => {
//     const documentId = 1 ;
//     const response = await t.context.got.delete(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
//     t.is(response.statusCode, 200);
// }); 




/*
**********************************************************
Test for viewing a document with an invalid id
**********************************************************
*/
test('GET document/${documentId} Document with invalid id', async (t) => {
    const documentId = 'a' ;
    const response = await t.context.got.get(`document/${documentId}`, { throwHttpErrors: false}, {responseType: 'json' });
    t.is(response.statusCode, 400);
});

/*
**********************************************************
Test for creating an event
**********************************************************
*/

test('POST event', async (t) => {
    const event = {
        date: 2203,
        duration: 2,
        eventId: 4,
        documents: [
          { documentId: 6 }
        ],
        time: 11,
        place: "Main Hall",
        title: "Annual Conference",
        day: "Wednesday",
        participants: [
            {
                password: "securepassword1",
                email_address: "user1@example.com",
                userId: 1,
                preferred_language: "English",
                username: "user1"
            },
            {
                password: "securepassword2",
                email_address: "user2@example.com",
                userId: 2,
                preferred_language: "Spanish",
                username: "user2"
            }
        ]
      };
    const response = await t.context.got.post('event', {
        json: event,
        response: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 200);
});



/*
**********************************************************
Test for creating an event that already exists
**********************************************************
*/

test('POST event existing event', async (t) => {
    const event = {
        date: 2203,
        duration: 2,
        eventId: 4,
        documents: [
          { documentId: 6 }
        ],
        time: 11,
        place: "Main Hall",
        title: "Annual Conference",
        day: "Wednesday",
        participants: [
            {
                password: "securepassword1",
                email_address: "user1@example.com",
                userId: 1,
                preferred_language: "English",
                username: "user1"
            },
            {
                password: "securepassword2",
                email_address: "user2@example.com",
                userId: 2,
                preferred_language: "Spanish",
                username: "user2"
            }
        ]
      };
    const response = await t.context.got.post('event', {
        json: event,
        response: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
});



/*
**********************************************************
Test for creating an event with invalid data
**********************************************************
*/
test('POST event invalid event', async (t) => {
    const event = {
        date: 20231115, // Invalid data type (should be a string)
        duration: "2", // Invalid data type (should be a number)
        eventId: "4", // Invalid data type (should be a number)
        documents: [
            { documentId: "6" }, // Invalid data type (should be a number)
            { documentId: "7" } // Invalid data type (should be a number)
        ],
        time: 1100, // Invalid data type (should be a string)
        place: 123, // Invalid data type (should be a string)
        title: true, // Invalid data type (should be a string)
        day: false, // Invalid data type (should be a string)
        participants: "invalid" // Invalid data type (should be an array)
    };
    const response = await t.context.got.post('event', {
        json: event,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
}); 



/*
**********************************************************
Test for creating an event with negative values 
**********************************************************
*/
test('POST event event with negative values', async (t) => {
    const event = {
        date: -20231115, // Negative number
        duration: -2, // Negative number
        eventId: -4, // Negative number
        documents: [
            { documentId: -6 }, // Negative number
            { documentId: -7 } // Negative number
        ],
        time: -1100, // Negative number
        place: "Main Hall",
        title: "Annual Conference",
        day: "Wednesday",
        participants: [
            {
                password: "securepassword1",
                email_address: "user1@example.com",
                userId: 1,
                preferred_language: "English",
                username: "user1"
            },
            {
                password: "securepassword2",
                email_address: "user2@example.com",
                userId: 2,
                preferred_language: "Spanish",
                username: "user2"
            }
        ]
    };
    const response = await t.context.got.post('event', {
        json: event,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
});


