'use strict';

var utils = require('../utils/writer.js');
var Wallet = require('../service/WalletService');
var Card = require('../service/CardService');

/**
 * Adds a card to a wallet.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {object} body - The card details to add.
 * @param {string} walletId - The ID of the wallet to which the card should be added.
 */
module.exports.addCard = function addCard(_req, res, _, body, walletId) {
  Wallet.addCard(body, walletId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Removes a card from a wallet.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} walletId - The ID of the wallet from which the card should be removed.
 * @param {string} cardNumber - The card number to remove.
 */
module.exports.removeCard = function removeCard(_req, res, _, walletId, cardNumber) {
  Wallet.removeCard(walletId, cardNumber)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Uses a card for a transaction.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {object} body - The transaction details.
 * @param {string} walletId - The ID of the wallet using the card.
 */
module.exports.useCard = function useCard(_req, res, _, body, walletId) {
  Wallet.useCard(body, walletId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};

/**
 * Retrieves all cards in a wallet.
 * 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function.
 * @param {string} walletId - The ID of the wallet whose cards are to be viewed.
 */
module.exports.viewCards = function viewCards(_req, res, _, walletId) {
  Wallet.viewCards(walletId)
    .then(function(response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function(response) {
      utils.writeJson(res, response, response.code);
    });
};
