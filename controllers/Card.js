'use strict';

var utils = require('../utils/writer.js');
var Card = require('../service/CardService');

module.exports.selectCard = function selectCard (_req, res, _next, walletId, cardNumber) {
  Card.selectCard(walletId, cardNumber)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};