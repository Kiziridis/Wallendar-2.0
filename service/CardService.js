'use strict';

const wallets = [
  {
    walletId: 1,
    card: {
      card_holder: "Konstantinos Panagiotou",
      cardNumber: 1111222233334444,
      cvv: 107,
      exp_date: 22032032
    }
  },
  {
    walletId: 2,
    card: {
      card_holder: "John Doe",
      cardNumber: 2222333344445555,
      cvv: 108,
      exp_date: 22042042
    }
  },
  {
    walletId: 3,
    card: {
      card_holder: "Jane Doe",
      cardNumber: 3333444455556666,
      cvv: 109,
      exp_date: 22052052
    }
  },
  {
    walletId: 4,
    card: {
      card_holder: "John Smith",
      cardNumber: 4444555566667777,
      cvv: 110,
      exp_date: 22062062
    }
  },
  {
    walletId: 5,
    card: {
      card_holder: "Jane Smith",
      cardNumber: 5555666677778888,
      cvv: 111,
      exp_date: 22072072
    }
  }
];

/**
 * Select a card from your wallet.
 * FR2: The user must be able to manage their cards. (select card) 
 *
 * walletId Integer Id of the user's wallet
 * cardNumber Integer Number of a user's card
 * returns Card
 **/
exports.selectCard = function(walletId, cardNumber) {
  return new Promise(function(resolve, reject) {
    const wallet = wallets.find(w => w.walletId === walletId && w.card.cardNumber === cardNumber);
    if (wallet) {
      resolve(wallet.card);
    } else {
      reject({
        message: "Card not found",
        code: 400
      });
    }
  });
}