'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

module.exports.addDocument = function addDocument (req, res, next, body) {
  Document.addDocument(body)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.addDocumentEvent = function addDocumentEvent (req, res, next, body, calendarId, eventId, documentId) {
  Document.addDocumentEvent(body, calendarId, eventId, documentId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.deleteDocument = function deleteDocument (req, res, next, documentId) {
  Document.deleteDocument(documentId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.deleteDocumentEvent = function deleteDocumentEvent (req, res, next, calendarId, eventId, documentId) {
  Document.deleteDocumentEvent(calendarId, eventId, documentId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewDocument = function viewDocument (req, res, next, documentId) {
  Document.viewDocument(documentId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};
