const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send("Hello World!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

module.exports = app;