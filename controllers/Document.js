'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

/**
 * Adds a document.
 * 
 * This function adds a new document to the system by calling the `addDocument` method 
 * from the `Document` service. It handles the response and writes it using `utils.writeJson`.
 * 
 * @param {object} __ - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {object} body - The document details to add.
 */
module.exports.addDocument = function addDocument(__, res, _, body) {
  Document.addDocument(body)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Adds a document event to a calendar.
 * 
 * This function adds a document event to a specific calendar and event by calling the 
 * `addDocumentEvent` method from the `Document` service. It handles the response and writes it using `utils.writeJson`.
 * 
 * @param {object} __ - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {object} body - The document event details to add.
 * @param {string} calendarId - The ID of the calendar to which the event belongs.
 * @param {string} eventId - The ID of the event to which the document belongs.
 * @param {string} documentId - The ID of the document to add to the event.
 */
module.exports.addDocumentEvent = function addDocumentEvent(__, res, _, body, calendarId, eventId, documentId) {
  Document.addDocumentEvent(body, calendarId, eventId, documentId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Deletes a document.
 * 
 * This function deletes a document from the system by calling the `deleteDocument` method 
 * from the `Document` service. It handles the response and writes it using `utils.writeJson`.
 * 
 * @param {object} __ - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} documentId - The ID of the document to delete.
 */
module.exports.deleteDocument = function deleteDocument(__, res, _, documentId) {
  Document.deleteDocument(documentId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Deletes a document event from a calendar.
 * 
 * This function deletes a document event from a specific calendar and event by calling 
 * the `deleteDocumentEvent` method from the `Document` service. It handles the response and writes it using `utils.writeJson`.
 * 
 * @param {object} __ - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} calendarId - The ID of the calendar to which the event belongs.
 * @param {string} eventId - The ID of the event from which to delete the document.
 * @param {string} documentId - The ID of the document to delete from the event.
 */
module.exports.deleteDocumentEvent = function deleteDocumentEvent(__, res, _, calendarId, eventId, documentId) {
  Document.deleteDocumentEvent(calendarId, eventId, documentId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Views a document.
 * 
 * This function retrieves a document from the system by calling the `viewDocument` method 
 * from the `Document` service. It handles the response and writes it using `utils.writeJson`.
 * 
 * @param {object} __ - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} documentId - The ID of the document to view.
 */
module.exports.viewDocument = function viewDocument(__, res, _, documentId) {
  Document.viewDocument(documentId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};
