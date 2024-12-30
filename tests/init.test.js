const http = require('node:http');
const test = require('ava');
const got = require('got');
const express = require('express');
const app = require('../index');
const { Events } = require('../service/CalendarService');
const { exampleEvents } = require('../service/EventService');

//dummy participant data
const pax = [
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
];

// Before the tests
test.before(async (t) => {
    t.context.server = http.createServer(app);
    const server = t.context.server.listen(0);
    const { port } = server.address();
    t.context.got = got.extend({ prefixUrl: `http://localhost:${port}` });
    console.log('Server started');
});
// After the tests
test.after.always((t) => {
    t.context.server.close();
    console.log('Server closed');
});

// UNHAPPY PATH for PUT calendar/{calendarId}/event/{eventId} [calendarId is not in correct form]
test('PUT /calendar/{calendarId}/event/{eventId} Invalid calendarId', async (t) => {
    const calendarId = 5; // Invalid calendarId
    const eventId = 1;
    const updatedEvent = {
        date: 2204,
        duration: 3,
        eventId: 2,
        documents: [
          { documentId: 6 }
        ],
        time: 11,
        place: "Main Hall",
        title: "Annual Conference",
        day: "Wednesday",
        participants: pax
    };
    const response = await t.context.got.put(`calendar/${calendarId}/event/${eventId}`, {
        json: updatedEvent,
        throwHttpErrors: false
    });
    t.is(response.statusCode, 404);

});

// HAPPY PATH for PUT /calendar/{calendarId}/event/{eventId}
test('PUT /calendar/{calendarId}/event/{eventId} Edit event successfully', async (t) => {
    const calendarId = 1;
    const eventId = 1;
    const updatedEvent = {
        date: 2024,
        duration: 3,
        eventId: 2,
        documents: [
          { documentId: 6 }
        ],
        time: 1,
        place: "Auth ",
        title: " Sfhmmy",
        day: "Wednesday",
        participants: [
            {
                password: "softeng2021",
                email_address: "user1@auth.ece.com",
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
    const response = await t.context.got.put(`calendar/${calendarId}/event/${eventId}`, {
        json: updatedEvent
    });
    t.is(response.statusCode, 200);
});

// HAPPY PATH for PUT /wallet/{walletId}
test('PUT /wallet/{walletId} Use card successfully', async (t) => {
    const walletId = 1;
    const body = {
        walletId: 1,
        Cards: [
            {
                card_holder: "Konstantinos Panagiotou",
                cvv: 107,
                card_number: 1111222233334444,
                exp_date: 22032032
            }
        ],
        NFCon: true
    };
    const response = await t.context.got.put(`wallet/${walletId}`, {
        json: body
    });
    t.is(response.statusCode, 200);
});

// UNHAPPY PATH for PUT /wallet/{walletId} [walletId does not exist]
test('PUT /wallet/{walletId} Wallet not found', async (t) => {
    const walletId = 12;
    const body = {
        walletId: 12,
        Cards: [
            {
                card_holder: "Konstantinos Panagiotou",
                cvv: 107,
                card_number: 1111222233334444,
                exp_date: 22032032
            }
        ],
        NFCon: true
    };
    const response = await t.context.got.put(`wallet/${walletId}`, { throwHttpErrors: false, json:body });
    t.is(response.statusCode, 404);
});
    
// HAPPY PATH for GET /users/{username}
test('GET /users/{username} Get user successfully', async (t) => {
    const username = 'klpanagi';
    const response = await t.context.got(`users?username=${username}`, { responseType: 'json' });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, {
        password: "password",
        email_address: "klpanagi@example.com",
        preferred_language: "Greek",
        username: "klpanagi"
    });
});

// UNHAPPY PATH for GET /users/{username} [user does not exist]
test('GET /users/{username} User not found', async (t) => {
    const username = 'MikeWazowski';
    const response = await t.context.got(`users/${username}`, { throwHttpErrors: false, responseType: 'json' });
    t.is(response.statusCode, 404);
});

// HAPPY PATH for GET /wallet/{walletId}/card/{cardnumber}
test('GET wallet/{walletId}/card/{cardnumber} Select card from wallet successfully', async (t) => {
    walletId = 2;
    cardNumber = 2222333344445555;
    const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, {
        card_holder: 'John Doe',
        cardNumber: 2222333344445555,
        cvv: 108,
        exp_date: 22042042
    });
});

// UNHAPPY PATH for GET wallet/{walletId}/card/{cardnumber} [walletId does not exist]
test('GET wallet/{walletId}/card/{cardnumber} Invalid walletId', async (t) => {
    walletId = 20;
    cardNumber = 2222333344445555;
    const response = await t.context.got(`wallet/${walletId}/card/${cardNumber}`, { throwHttpErrors: false, responseType: 'json' });
    t.is(response.statusCode, 400);
});

// HAPPY PATH for DELETE /wallet/{walletId}/card/{cardnumber}
test('DELETE wallet/{walletId}/card/{cardnumber} Remove card from wallet successfully', async (t) => {
    walletId = 2;
    cardNumber = 2222333344445555;
    const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, { responseType: 'json' });
    t.is(response.statusCode, 200);
});

// UNHAPPY PATH for DELETE /wallet/{walletId}/card/{cardnumber} [walletId does not exist]
test('DELETE wallet/{walletId}/card/{cardnumber} Card not found walletId does not exist', async (t) => {
    walletId = 20;
    cardNumber = 2222333344445555;
    const response = await t.context.got.delete(`wallet/${walletId}/card/${cardNumber}`, {throwHttpErrors: false},{ responseType: 'json' });
    t.is(response.statusCode, 404);
});

// HAPPY PATH for POST /notification
test('POST /notification Create a notification', async (t) => {
    const notification = {
        notificationTime: 6,
        notificationId: 1    };
    const response = await t.context.got.post('notification',
        { json: notification, 
            responseType: 'json' ,
            throwHttpErrors: false});
    t.is(response.statusCode, 200);
});

// UNHAPPY PATH for POST /notification [invalid notificationTime (not between 0 and 24)]
test('POST /notification Create a notification with invalid time', async (t) => {
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


// UNHAPPY PATH for POST notification [invalid notificationId (not a positive number)]
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

// HAPPY PATH for GET notification/{notificationId}
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

// UNHAPPY PATH for GET notification/{notificationId} [notificationId is not valid]
test('GET /notification/{notificationId} Receive a notification with invalid Id', async (t) => {
    const notificationId = -1; // Invalid Id
    const response = await t.context.got(`notification/${notificationId}`, {
        throwHttpErrors: false,
        responseType: 'json'
    });
    t.is(response.statusCode, 400);
});

//HAPPY PATH for POST /event 
test('POST /event', async (t) => {
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
        participants: pax
      };
    const response = await t.context.got.post('event', {
        json: event,
        response: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 200);
});


//UNHAPPY PATH for POST /event [event already exists]
test('POST event existing event', async (t) => {
    const event = exampleEvents[0];
    const response = await t.context.got.post('event', {
        json: event,
        response: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
});


//UNHAPPY PATH for POST /event [invalid event data type]
test('POST event invalid event', async (t) => {
    const event = {
        date: "20231115", // Invalid data type (should be a number)
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


//UNHAPPY PATH for POST event [invalid event data type - negative values]
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
        participants: pax
    };
    const response = await t.context.got.post('event', {
        json: event,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
});

const event1 = {
    date: 20231115,
    duration: 2,
    eventId: 4,
    documents: [
        { documentId: 6 },
        { documentId: 7 }
    ],
    time: 1100,
    place: "Main Hall",
    title: "Annual Conference",
    day: "Wednesday",
    participants: pax
};

// HAPPY PATH for POST /calendar/{calendarId}/event
test('POST /calendar/{calendarId}/event Add event to calendar', async (t) => {
    const calendarId = 1;
    const response = await t.context.got.post(`calendar/${calendarId}/event`, {
        json: event1,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 200);
})

// UNHAPPY PATH for POST /calendar/{calendarId}/event [calendarId does not exist]
test('POST /calendar/{calendarId}/event Add event to nonexisting calendar', async (t) => {
    const calendarId = 5;
    const response = await t.context.got.post(`calendar/${calendarId}/event`, {
        json: event1,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
})

// UNHAPPY PATH for POST /calendar/{calendarId}/event [event already exists]
test('POST /calendar/{calendarId}/event Add existing event to calendar', async (t) => {
    const calendarId = 1;
    const event =  Events[0];
      const response = await t.context.got.post(`calendar/${calendarId}/event`, {
        json: event,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
})

// UNHAPPY PATH for POST /calendar/{calendarId}/event [event with invalid data]
test('POST /calendar/{calendarId}/event Add event to calendar with invalid data', async (t) => {
    const calendarId = 1;
    const event = {
        date: "invalid-date", // Invalid data type (should be a number)
        duration: -2, // Invalid value (should be a positive number)
        eventId: "invalid-id", // Invalid data type (should be a number)
        documents: [
            { documentId: "invalid-doc-id" }, // Invalid data type (should be a number)
            { documentId: -2 } // Invalid value (should be a positive number)
        ],
        time: "invalid-time", // Invalid data type (should be a number)
        place: 123, // Invalid data type (should be a string)
        title: true, // Invalid data type (should be a string)
        day: false, // Invalid data type (should be a string)
        participants: "invalid-participants" // Invalid data type (should be an array)
    };
    const response = await t.context.got.post(`calendar/${calendarId}/event`, {
        json: event,
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);
    
});


// HAPPY PATH for DELETE /calendar/{calendarId}/event/{eventId}
test('DELETE /calendar/{calendarId}/event/{eventId} Delete event from calendar', async (t) => {
    const calendarId = 1;
    const eventId = 1;
    response = await t.context.got.delete(`calendar/${calendarId}/event/${eventId}`, {
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 200);

});

// UNHAPPY PATH for DELETE /calendar/{calendarId}/event/{eventId} [event does not exist]
test('DELETE /calendar/{calendarId}/event/{eventId} Delete nonexisting event from calendar', async (t) => {
    const calendarId = 1;
    const eventId = 8;
    response = await t.context.got.delete(`calendar/${calendarId}/event/${eventId}`, {
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);

});


// UNHAPPY PATH for DELETE /calendar/{calendarId}/event/{eventId} [calendar does not exist]
test('DELETE /calendar/{calendarId}/event/{eventId} Delete event from nonexisting calendar', async (t) => {
    const calendarId = 8;
    const eventId = 1;
    response = await t.context.got.delete(`calendar/${calendarId}/event/${eventId}`, {
        responseType: 'json',
        throwHttpErrors: false
    });
    t.is(response.statusCode, 400);

});

// HAPPY PATH for POST document
test('POST document', async (t) => {
    const document = {
        documentId: 10
    };

    const response = await t.context.got.post('document', {
        json: document,
        responseType: 'json',
        throwHttpErrors: false
    });

    t.is(response.statusCode, 200);
});

// UNHAPPY PATH for POST document [document with invalid data]
test('POST document invalid id', async (t) => {
    const document = {
        documentId: 'a'
    };

    const response = await t.context.got.post('document', {
        json: document,
        responseType: 'json',
        throwHttpErrors: false
    });

    t.is(response.statusCode, 400);
});

// UNHAPPY PATH for POST document [document already exists]
test('POST document already existing document', async (t) => {
    const document = {
        documentId: 0
    };

    const response = await t.context.got.post('document', {
        json: document,
        responseType: 'json',
        throwHttpErrors: false
    });

    t.is(response.statusCode, 400);
});


// UNHAPPY PATH for POST document [documentId is negative]
test('POST document negative id', async (t) => {
    const document = {
        documentId: -1
    };

    const response = await t.context.got.post('document', {
        json: document,
        responseType: 'json',
        throwHttpErrors: false
    });

    t.is(response.statusCode, 400);
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
    const documentId = 2 ;
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
