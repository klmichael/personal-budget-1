//Envelopes
var nextEnvelopeId = 5;

const envelopes = [
  {
  "id": "1",
  "name": "toys",
  "amount": 0
  },
  {
    "id": "2",
    "name": "candy",
    "amount": 0
  },
  {
    "id": "3",
    "name": "books",
    "amount": 0
  },
  {
    "id": "4",
    "name": "stuffies",
    "amount": 0
  }
];

function createEnvelope(name) {
  var newEnvelope = {
    id: `${nextEnvelopeId}`,
    name: name,
    amount: 0,
  };
  envelopes.push(newEnvelope);
  nextEnvelopeId++;
  return envelopes[envelopes.length - 1];
}

function getEnvelope(envelopeId) {
  let index = envelopes.findIndex(envelope => envelope.id === envelopeId);
  if (index < 0) {
    return 'Sorry, that is not a valid envelope.'
  } else {
    return envelopes[index];
  }
}

//Transactions

//Withdraw function

//Deposit function

//Transfer function

module.exports = { envelopes, createEnvelope, getEnvelope };