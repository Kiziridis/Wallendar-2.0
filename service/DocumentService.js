'use strict';
const documents = [
  {
    documentId: 0
  },
  {
    documentId: 1
  },
  {
    documentId: 2
  },
  {
    documentId: 3
  },
  {
    documentId: 4
  }
];

/**
 * Add a document to your account.
 * FR4: The user must be able to manage their documents. (add document) 
 *
 * body Document 
 * returns Document
 **/
exports.addDocument = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } reject({
      message: "Card not found",
      code: 400
    });
  });
}


/**
 * Add a document to an event.
 * FR8: The user must be able to manage their event documents. (add document to event) 
 *
 * body Event Event model (optional)
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that the user wants to add a document in
 * documentId Integer Id of the document that the user wants to add
 * returns Event
 **/
exports.addDocumentEvent = function(body,calendarId,eventId,documentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : 6,
  "duration" : 5,
  "eventId" : 0,
  "documents" : [ {
    "documentId" : 0
  }, {
    "documentId" : 0
  } ],
  "time" : 1,
  "place" : "place",
  "title" : "title",
  "day" : "Monday",
  "participants" : [ {
    "password" : "password",
    "email_address" : "email_address",
    "userId" : 0,
    "preferred_language" : "Greek",
    "username" : "username"
  }, {
    "password" : "password",
    "email_address" : "email_address",
    "userId" : 0,
    "preferred_language" : "Greek",
    "username" : "username"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } reject({
      message: "Card not found",
      code: 400
    });
  });
}


/**
 * Delete a document from your account.
 * FR4: The user must be able to manage their documents. (delete document) 
 *
 * documentId Integer Id of the user's document
 * returns Success
 **/
exports.deleteDocument = function(documentId) {
  return new Promise(function(resolve, reject) {
    // Find the document index
    const documentIndex = documents.findIndex(doc => doc.documentId === documentId);
    if (documentIndex === -1) {
      reject({
        message: "Document not found",
        code: 400
      });
      return;
    }

    // Remove the document from the array
    documents.splice(documentIndex, 1);

    // Resolve with a success message
    resolve({
      message: "Document deleted successfully",
      code: 200
    });
  });
};

/**
 * Remove a document from an event.
 * FR8: The user must be able to manage their event documents. (remove document from an event) 
 *
 * calendarId Integer Id of the user's calendar
 * eventId Integer Id of the event that the user wants to remove a document from
 * documentId Integer Id of the document that the user wants to remove
 * returns Success
 **/
exports.deleteDocumentEvent = function(calendarId,eventId,documentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } reject({
      message: "Card not found",
      code: 400
    });
  });
}


/**
 * View a document in your account.
 * FR4: The user must be able to manage their documents. (view document) 
 *
 * documentId Integer Id of the user's document
 * returns Document
 **/
exports.viewDocument = function(documentId) {
  return new Promise(function(resolve, reject) {
    if (!Number.isInteger(documentId) || documentId <= 0) {
      reject({
        message: "Invalid document ID",
        code: 400
      });
      return;
    }
    const document = documents.find(doc => doc.documentId === documentId);
    if (document) {
      resolve(document);
    } else {
      console.log("Document not found");
      reject({
        message: "Document not found",
        code: 400
      });
    }
  });
};

