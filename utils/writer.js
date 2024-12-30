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
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // If arg1 is an instance of ResponsePayload, extract code and payload
  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine the HTTP status code
  if (arg2 && Number.isInteger(arg2)) {
    code = arg2;
  } else {
    if (arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }

  // Determine the payload
  if (code && arg1) {
    payload = arg1;
  } else if (arg1) {
    payload = arg1;
  }

  // Default to HTTP status code 200 if none is provided
  if (!code) {
    code = 200;
  }

  // Convert payload to JSON string if it's an object
  if (typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }

  // Write the JSON response
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end(payload);
};
