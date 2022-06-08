const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { envelopes, createEnvelope, getEnvelope } = require('./server/db');

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send("Hello World!");
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

module.exports = app;