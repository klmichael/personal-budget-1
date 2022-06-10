const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { envelopes, createEnvelope, getEnvelope, deleteEnvelope, withdraw, deposit, transfer } = require('./server/db');

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send("Welcome to your envelopes budget!");
})

app.get('/envelopes/', (req, res, next) => {
  res.send(envelopes);
})

app.get('/envelopes/:envelopeId/', (req, res, next) => {
  let id = req.params.envelopeId;
  const selection = getEnvelope(id);
  res.send(selection); 
})

app.post('/envelopes/', (req, res, next) => {
  const { name } = req.query;
  const newEnvelope = createEnvelope(name);
  res.status(201).send(newEnvelope);
})

app.delete('/envelopes/:envelopeId/', (req, res, next) => {
  let id = req.params.envelopeId;
  const deletion = deleteEnvelope(id);
  if (deletion) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
})

app.put('/deposit/', (req, res, next) => {
  let {envelopeId, amount} = req.body;
  let transactionSuccess = deposit(envelopeId, amount);
    if (transactionSuccess) {
      res.status(200)
    } else {
      res.status(400)
    }
    res.send();
})

app.put('/withdraw/', (req, res, next) => {
  let {envelopeId, amount} = req.body;
  let transactionSuccess = withdraw(envelopeId, amount);
    if (transactionSuccess) {
      res.status(200)
    } else {
      res.status(400)
    }
    res.send();
})

app.put('/transfer/', (req, res, next) => {
  let {envelopeId1, envelopeId2, amount}  = req.body;
  let transactionSuccess = transfer(envelopeId1, envelopeId2, amount);
    if (transactionSuccess) {
      res.status(200)
    } else {
      res.status(400)
    }
    res.send();
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

module.exports = app;