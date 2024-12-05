'use strict';

var utils = require('../utils/writer.js');
var Wallet = require('../service/WalletService');

module.exports.addCard = function addCard (req, res, next, body, walletId) {
  Wallet.addCard(body, walletId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeCard = function removeCard (req, res, next, walletId, cardNumber) {
  Wallet.removeCard(walletId, cardNumber)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.useCard = function useCard (req, res, next, body, walletId) {
  Wallet.useCard(body, walletId)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.viewCards = function viewCards (req, res, next, walletId) {
  Wallet.viewCards(walletId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
