//Envelopes
var nextEnvelopeId = 5;

const envelopes = [
  {
  "id": "1",
  "name": "toys",
  "amount": 10
  },
  {
    "id": "2",
    "name": "candy",
    "amount": 5
  },
  {
    "id": "3",
    "name": "books",
    "amount": 10
  },
  {
    "id": "4",
    "name": "stuffies",
    "amount": 15
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

function findEnvelopeIndex(envelopeId) {
  let index = envelopes.findIndex(envelope => envelope.id === envelopeId);
  return index; //-1 or 0+
}

function validIndex(index) {
  return index >= 0; //boolean
}

function amountAvailable(validIndex, amount) {
  let available = envelopes[validIndex].amount >= amount;
  return available;  //boolean
}

function getEnvelope(envelopeId) {
  let index = findEnvelopeIndex(envelopeId);
  if (validIndex(index)) {
    return envelopes[index];  //specified envelope object
  }
}

function deleteEnvelope(envelopeId) {
  let index = findEnvelopeIndex(envelopeId);
  if (validIndex(index)) {
    return envelopes.splice(index, 1); //array with deleted envelope object
  }
}

function withdraw(envelopeId, amount) {
  let index = findEnvelopeIndex(envelopeId);
  //First, validate the index
  if (!validIndex(index)) {
    return false;
    //If the index is valid, check the amount is available
  } else if (!amountAvailable(index, amount)) {
    return false
    //Both index and amount must be valid to get to the final statement
  } else {
    envelopes[index].amount -= amount;
    return true;
  } 
}
      

//Deposit function
function deposit(envelopeId, amount) {
  let index = findEnvelopeIndex(envelopeId);
  if (!validIndex(index)) {
    return false;
  } else {
    envelopes[index].amount += amount;
    return true;
  }
}

//Transfer function
function transfer(envelopeId1, envelopeId2, amount) {
  let index1 = findEnvelopeIndex(envelopeId1);
  let index2 = findEnvelopeIndex(envelopeId2);
  //Verify that both envelopes exist
  if (!validIndex(index1) || !validIndex(index2)) {
    return false;
  //If both envelopes exist, verify that the first envelope has sufficient funds.
  } else if (!amountAvailable(index1, amount)) {
    return false;
  //If the first envelope has suffcient funds, perform the transaction;
  } else {
    envelopes[index1].amount -= amount;
    envelopes[index2].amount += amount;
    return true;
  }
}

module.exports = { envelopes, createEnvelope, getEnvelope, deleteEnvelope, withdraw, deposit, transfer };