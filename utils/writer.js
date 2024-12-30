'use strict';

/**
 * Constructs a ResponsePayload object.
 * 
 * @param {number} code - The HTTP status code.
 * @param {any} payload - The payload to include in the response.
 * @constructor
 */
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
};

/**
 * Creates a new ResponsePayload object with the given code and payload.
 * 
 * @param {number} code - The HTTP status code.
 * @param {any} payload - The payload to include in the response.
 * @returns {ResponsePayload} The new ResponsePayload object.
 */
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
};

/**
 * Writes a JSON response to the HTTP response object.
 * 
 * @param {object} response - The HTTP response object.
 * @param {any} arg1 - The payload or a ResponsePayload object.
 * @param {number} [arg2] - The HTTP status code.
 */
exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // Determine if arg1 is a ResponsePayload object or a payload
  if (arg1 && arg1 instanceof ResponsePayload) {
    code = arg1.code;
    payload = arg1.payload;
  } else {
    code = arg2 || 200; // Default to 200 if no code is provided
    payload = arg1;
  }

  // Set the response status code and content type
  response.status(code);
  response.json(payload);
};