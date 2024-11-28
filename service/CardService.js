'use strict';


/**
 * Select a card from your wallet.
 * FR2: The user must be able to manage their cards. (select card) 
 *
 * walletId Integer Id of the user's wallet
 * cardNumber Integer Number of a user's card
 * returns Card
 **/
exports.selectCard = function(walletId,cardNumber) {
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

