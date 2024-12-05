'use strict';


/**
 * Add a new card in your wallet.
 * FR2: The user must be able to manage their cards. (add card) 
 *
 * body Card 
 * walletId Integer Id of the user's wallet
 * returns Card
 **/
exports.addCard = function(body,walletId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "card_holder" : "Konstantinos Panagiotou",
  "cvv" : 107,
  "card_number" : 1111222233334444,
  "exp_date" : 22032032
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a card from your wallet.
 * FR2: The user must be able to manage their cards. (remove cards) 
 *
 * walletId Integer Id of the user's wallet
 * cardNumber Integer Number of a user's card
 * returns Success
 **/
exports.removeCard = function(walletId,cardNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Use a card from your wallet.
 * FR3: The user must be able to use their cards. (use card) 
 *
 * body Wallet Wallet model (optional)
 * walletId Integer Id of the user's wallet
 * returns Success
 **/
exports.useCard = function(body,walletId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View all cards in your wallet.
 * FR2: The user must be able to manage their cards. (view cards) 
 *
 * walletId Integer Id of the user's wallet
 * returns Cards
 **/
exports.viewCards = function(walletId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "card_holder" : "Konstantinos Panagiotou",
  "cvv" : 107,
  "card_number" : 1111222233334444,
  "exp_date" : 22032032
}, {
  "card_holder" : "Konstantinos Panagiotou",
  "cvv" : 107,
  "card_number" : 1111222233334444,
  "exp_date" : 22032032
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

