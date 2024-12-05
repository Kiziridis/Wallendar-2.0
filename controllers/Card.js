'use strict';

var utils = require('../utils/writer.js');
var Card = require('../service/CardService');

module.exports.selectCard = function selectCard (req, res, next, walletId, cardNumber) {
  Card.selectCard(walletId, cardNumber)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};